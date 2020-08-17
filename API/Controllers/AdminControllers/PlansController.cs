using AutoMapper;
using Interface.AdminInterface;
using Microsoft.AspNetCore.Mvc;
using Models.AdminModels;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using ViewModels.AdminViewModels;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlansController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly IPlan plan;

        public PlansController(IMapper mapper, IPlan plan)
        {
            this.plan = plan;
            this.mapper = mapper;
        }

        [HttpGet]
        public IEnumerable<PlanViewModel> Get()
        {
            return plan.GetPlanList();
        }
         
        [HttpGet("{id}")]
        public PlanViewModel Get(Guid id)
        {
            try
            {
                return plan.GetPlanbyId(id);
            }
            catch (Exception)
            {
                throw;
            }
        }
         
        [HttpPost]
        public HttpResponseMessage Post([FromBody] PlanViewModel planViewModel)
        {
            try
            {  
                var pln = mapper.Map<Plan>(planViewModel);
                plan.InsertPlan(pln);
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
         
        [HttpPut("{id}")]
        public HttpResponseMessage Put(Guid id, [FromBody] PlanViewModel planViewMode)
        {
            try
            { 
                var pln = mapper.Map<Plan>(planViewMode); 
                plan.InsertPlan(pln);

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
         
        [HttpDelete("{id}")]
        public HttpResponseMessage Delete(Guid id)
        {
            try
            {
                var result = plan.DeletePlan(id);

                if (result)
                {
                    plan.DeletePlan(id);
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
                throw;
            }
        }
    }
}
