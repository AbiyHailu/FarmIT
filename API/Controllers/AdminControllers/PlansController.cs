using AutoMapper;
using Interface;
using Microsoft.AspNetCore.Mvc;
using Models.AdminModels;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using ViewModels;


namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlansController : ControllerBase
    {

        private readonly IPlan plan;

        public PlansController(IPlan plan)
        {
            this.plan = plan;
        }

        [HttpGet]
        public IEnumerable<PlanListViewModel> Get()
        {
            return plan.GetPlanList();
        }
         
        [HttpGet("{id}")]
        public PlanViewModel Get(int id)
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
                if (plan.CheckPlanExits(planViewModel.PlanId))
                {
                    var response = new HttpResponseMessage()
                    {
                        StatusCode = HttpStatusCode.Conflict
                    };
                    return response;
                }
                else
                {
                
                    var x = new Mapper(null);
                    var pln = x.Map<Plan>(planViewModel);

                    plan.InsertPlan(pln);

                    var response = new HttpResponseMessage()
                    {
                        StatusCode = HttpStatusCode.OK
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
         
        [HttpPut("{id}")]
        public HttpResponseMessage Put(Guid id, [FromBody] PlanViewModel planViewMode)
        {
            try
            {
                if (plan.CheckPlanExits(planViewMode.PlanId))
                {
                    var response = new HttpResponseMessage()
                    {
                        StatusCode = HttpStatusCode.Conflict
                    };
                    return response;
                }
                else
                {

                    var x = new Mapper(null);
                    var pln = x.Map<Plan>(planViewMode);

                    plan.InsertPlan(pln);

                    var response = new HttpResponseMessage()
                    {
                        StatusCode = HttpStatusCode.OK
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
         
        [HttpDelete("{id}")]
        public HttpResponseMessage Delete(Guid id)
        {
            try
            {
                plan.DeletePlan(id);
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
