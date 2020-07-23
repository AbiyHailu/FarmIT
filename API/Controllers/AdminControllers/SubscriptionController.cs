using AutoMapper;
using Interface;
using Microsoft.AspNetCore.Mvc;
using Models.AdminModels;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using ViewModels;

namespace API.Controllers.AdminControllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubscriptionController : ControllerBase
    {

        private readonly ISubscription subscription;
        public SubscriptionController(ISubscription subscription)
        {
            this.subscription = subscription;
        }
         
        [HttpGet]
        public IEnumerable<SubscriptionListViewModel> Get()
        {
            return subscription.GetSubscriptionList();
        }
         
        [HttpGet("{id}")]
        public SubscriptionViewModel Get(int id)
        {
            try
            {
                return subscription.GetSubscriptionbyId(id);
            }
            catch (Exception)
            {
                throw;
            }
        }
         
        [HttpPost]
        public HttpResponseMessage Post([FromBody] SubscriptionViewModel subscriptionViewModel)
        {
            try
            {
                if (subscription.CheckPlanExits(subscriptionViewModel.PlanId))
                {
                    var response = new HttpResponseMessage()
                    {
                        StatusCode = HttpStatusCode.Conflict
                    };
                    return response;
                }
                else
                {
                    var companyId = User.FindFirstValue(ClaimTypes.Name);

                    var x = new Mapper(null);
                    var subcription =x.Map<Subscription>(subscriptionViewModel);

                    subscription.InsertSubscription(subcription);

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
        public HttpResponseMessage Put(Guid id, [FromBody] SubscriptionViewModel subscriptionViewModel)
        {
            try
            {
                if (subscription.CheckPlanExits(subscriptionViewModel.PlanId))
                {
                    var response = new HttpResponseMessage()
                    {
                        StatusCode = HttpStatusCode.Conflict
                    };
                    return response;
                }
                else
                {
                    var companyId = User.FindFirstValue(ClaimTypes.Name);

                    var x = new Mapper(null);
                    var subcription = x.Map<Subscription>(subscriptionViewModel);

                    subscription.UpdateSubscription(subcription);

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
                subscription.DeleteSubscription(id);
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
