using API.Mappings;
using AutoMapper;
using Concrete;
using Concrete.AdminConcrete;
using Concrete.ManagerConcrete;
using Interface.AdminInterface;
using Interface.UserInterface;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Logging;
using Microsoft.IdentityModel.Tokens;
using Models.AdminModels;
using System;
using System.Text; 

namespace API
{
    public class Startup
    {
        public IConfiguration Configuration { get; }
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<AdminContext>(options => options.UseSqlServer(Configuration.GetConnectionString("AdminConnnection"), b => b.MigrationsAssembly("API")));
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.RequireHttpsMetadata = false;
                    options.SaveToken = true;
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        ValidIssuer = Configuration["Jwt:Issuer"],
                        ValidAudience = Configuration["Jwt:Audience"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Jwt:SecretKey"])),
                        ClockSkew = TimeSpan.Zero
                    };

                    services.AddTransient<ISubscription, SubscriptionConcrete>();
                    services.AddCors();
                });

            services.AddAuthorization(config =>
            {
                config.AddPolicy(Policies.Admin, Policies.AdminPolicy());
                config.AddPolicy(Policies.User, Policies.UserPolicy());
            });

            services.AddSingleton<IConfiguration>(Configuration);
            services.AddTransient<ISubscription, SubscriptionConcrete>();
            services.AddTransient<IPlan, PlanConcrete>();
            services.AddTransient<ICompany, CompanyConcrete>();
            services.AddTransient<IUser, UserConcrete>();
            services.AddControllersWithViews();
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "../Client/ClientApp/dist";
            });
            var config = new MapperConfiguration(cfg => {
                cfg.AddProfile<ViewModelToModelMapper>();
            });
            var mapper = new Mapper(config);
            services.AddAutoMapper(typeof(Startup));
        }  
        
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                IdentityModelEventSource.ShowPII = true;
                app.UseDeveloperExceptionPage();
            }
            else
            {

                IdentityModelEventSource.ShowPII = true;
                app.UseExceptionHandler("/Error"); 
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            if (!env.IsDevelopment())
            {
                app.UseSpaStaticFiles();
            }

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });
            
            //app.Map("/admin",
            //   adminApp =>
            //   {
            //       adminApp.UseSpa(spa =>
            //       {
            //           spa.Options.SourcePath = "angular/admin";
            //           spa.Options.DefaultPageStaticFileOptions = new StaticFileOptions
            //           {
            //               FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "angular", "admin"))
            //           };

            //           if (env.IsDevelopment())
            //               spa.UseProxyToSpaDevelopmentServer("http://localhost:4200");
            //       });
            //   });

            //app.Map("/Manager",
            //  userApp =>
            //  {
            //      userApp.UseSpa(spa =>
            //      {
            //          spa.Options.SourcePath = "angular/user";
            //          spa.Options.DefaultPageStaticFileOptions = new StaticFileOptions
            //          {
            //              FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "angular", "user"))
            //          };

            //          if (env.IsDevelopment())
            //              spa.UseProxyToSpaDevelopmentServer("http://localhost:4201");
            //      });
            //  });

            app.UseSpa(spa =>
            { 
              // spa.Options.SourcePath = "../Client/ClientApp";  
                spa.Options.SourcePath = "../Client/ManagerApp"; 

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }
}
