using Interface.AdminInterface;
using Microsoft.AspNetCore.Mvc;
using Models.AdminModels;
using System;
using System.Linq;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using ViewModels.AdminViewModels;
using AutoMapper;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanysController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly ICompany company;
        public CompanysController(IMapper mapper, ICompany company)
        {
            this.mapper = mapper;
            this.company = company; 
        }

        [HttpGet]
        public IEnumerable<CompanyViewModel> Get()
        {
            return company.GetCompanyList();
        }
         
        [HttpGet("{id}")]
        public CompanyViewModel Get(Guid id)
        { 
            return company.GetCompanybyId(id); 
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

        [HttpPut("{id}")]
        public HttpResponseMessage Put(Guid id, [FromBody] string value)
        {
            try
            {
                var updatedCompany = mapper.Map<Company>(value);
                company.UpdateCompany(updatedCompany);

                var response = new HttpResponseMessage()
                {
                    StatusCode = HttpStatusCode.OK
                };

                return response;
            }
            catch (Exception)
            {

                throw;
            }
        }
         
        [HttpDelete("{id}")]
        public HttpResponseMessage Delete(Guid id)
        {
            try
            {
                var result = company.DeleteCompany(id);
                if (result)
                {
                    var response = new HttpResponseMessage()
                    {
                        StatusCode = HttpStatusCode.OK
                    };

                    return response;
                }
                else
                {
                    var response = new HttpResponseMessage()
                    {
                        StatusCode = HttpStatusCode.BadRequest
                    };
                    return response;
                }
            }
            catch (Exception)
            {
                var response = new HttpResponseMessage()
                {
                    StatusCode = HttpStatusCode.InternalServerError
                };
                return response;
            }
        }
    }
}
