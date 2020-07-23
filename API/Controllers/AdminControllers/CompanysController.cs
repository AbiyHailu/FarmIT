using Interface.AdminInterface;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using ViewModels.AdminViewModels;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanysController : ControllerBase
    {

        private readonly ICompany company;
        public CompanysController(ICompany company)
        {
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
            try
            {
                return company.GetCompanybyId(id);
            }
            catch (Exception)
            {
                throw;
            }
        }
         
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<CompanysController>/5
        [HttpPut("{id}")]
        public void Put(Guid id, [FromBody] string value)
        {
        }

        // DELETE api/<CompanysController>/5
        [HttpDelete("{id}")]
        public HttpResponseMessage Delete(Guid id)
        {
            try
            {
                company.DeleteCompany(id);
                var response = new HttpResponseMessage()
                {
                    StatusCode = HttpStatusCode.OK
                };

                return response;
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
