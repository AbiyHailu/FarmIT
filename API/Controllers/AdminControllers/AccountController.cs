using Interface.AdminInterface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Models.AdminModels;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using ViewModels.AdminViewModels;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers.AdminControllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly ICompany company;
        private readonly IConfiguration config;

        public AccountController(IConfiguration config,   ICompany company)
        {
            this.company = company;
            this.config = config;
        }
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet("{id}")]
        public string Login(int id)
        {
            return "value";
        }
 

        [HttpPost] 
        public IActionResult Register(Company newCompany)
        {
            IActionResult response = Unauthorized();
            CompanyViewModel registerdCompany = company.GetCompanyList().SingleOrDefault(x => x.Emailaddress == newCompany.Emailaddress);
            if (registerdCompany == null)
            {
                newCompany.UserType = "Manager";
                company.InsertCompany(newCompany); 
                return Ok("{}");
            }
            return response;
        }

        [HttpPost]
        [AllowAnonymous]
        public IActionResult Login([FromBody] CompanyViewModel login)
        {
            IActionResult response = Unauthorized();
            CompanyViewModel user = AuthenticateUser(login);
            if (user != null)
            {
                var tokenString = GenerateJWT(user);
                response = Ok(new
                {
                    token = tokenString,
                    userDetails = user
                });
            }
            return response;
        }
        CompanyViewModel AuthenticateUser(CompanyViewModel loginCredentials)
        {
            CompanyViewModel user = company.GetCompanyList().SingleOrDefault(x => x.Emailaddress == loginCredentials.Emailaddress && x.Password == loginCredentials.Password);
            return user;
        }
        string GenerateJWT(CompanyViewModel companyInfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Jwt:SecretKey"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, companyInfo.Emailaddress),
                new Claim("firstName", companyInfo.Name.ToString()),
                new Claim("role",companyInfo.UserType),
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
  

    [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }
         
        [HttpPost]
        public void Post([FromBody] string value)
        {
        } 

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }
         
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
