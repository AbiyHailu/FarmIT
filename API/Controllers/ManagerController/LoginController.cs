
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
            Company user = AuthenticateUser(login);
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
        Company AuthenticateUser(Company loginCredentials)
        {
            Company singleCompany = company.GetCompanyList.SingleOrDefault(x => x.Emailaddress == loginCredentials.Emailaddress && x.Password == loginCredentials.Password);
            return singleCompany;
        }
        string GenerateJWT(Company userInfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Jwt:SecretKey"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, userInfo.Emailaddress),
                new Claim("name", userInfo.Name.ToString()),
                new Claim("role",userInfo.UserType),
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