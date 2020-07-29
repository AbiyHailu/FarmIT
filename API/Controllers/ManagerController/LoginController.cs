
using Interface.AdminInterface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Models.AdminModels;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using ViewModels.AdminViewModels;

namespace API.Controllers.ManagerController
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly ICompany company;
        private readonly IConfiguration config; 

        public LoginController(IConfiguration config, ICompany company)
        {
            this.company = company;
            this.config = config;

        }
        [HttpPost]
        [AllowAnonymous]
        public IActionResult Login([FromBody] Company login)
        {
            IActionResult response = Unauthorized();
            CompanyViewModel company = AuthenticateUser(login);
            if (company != null)
            {
                var tokenString = GenerateJWT(company);
                response = Ok(new
                {
                    token = tokenString,
                    userDetails = company
                });
            }
            return response;
        }
        CompanyViewModel AuthenticateUser(Company loginCredentials)
        {
            CompanyViewModel singleCompany = company.GetCompanyList().SingleOrDefault(x => x.Name == loginCredentials.Name && x.Password == loginCredentials.Password);
            return singleCompany;
        }
        string GenerateJWT(CompanyViewModel userInfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Jwt:SecretKey"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, userInfo.Emailaddress),
                new Claim("name", userInfo.Name.ToString()),
                new Claim("role", userInfo.UserType),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            };
            var token = new JwtSecurityToken(
                issuer: config["Jwt:Issuer"],
                audience: config["Jwt:Audience"],
                claims: claims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: credentials
            );
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}