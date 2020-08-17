using AutoMapper;
using Interface.AdminInterface;
using Microsoft.AspNetCore.Mvc;
using Models.AdminModels;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using ViewModels.AdminViewModels;

namespace API.Controllers.AdminControllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubscriptionController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly ISubscription subscription;
        public SubscriptionController( IMapper mapper, ISubscription subscription)
        { 
            this.mapper = mapper;
            this.subscription = subscription;
        }
         
        [HttpGet]
        public IEnumerable<SubscriptionViewModel> Get()
        {
            return subscription.GetSubscriptionList();
        }
         
        [HttpGet("{id}")]
        public SubscriptionViewModel Get(Guid id)
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

        [HttpGet("{id}")]
        public List<SubscriptionViewModel> GetByCompanyId(Guid id)
        {
            try
            {
                return subscription.GetSubscriptionbyCompanyId(id);
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
               
                var companyId = User.FindFirstValue(ClaimTypes.Name);

                var subcription = mapper.Map<Subscription>(subscriptionViewModel); 

                subscription.InsertSubscription(subcription);

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
        public HttpResponseMessage Put(Guid id, [FromBody] SubscriptionViewModel subscriptionViewModel)
        {
            try
            {
                var companyId = User.FindFirstValue(ClaimTypes.Name);

                var subcription = mapper.Map<Subscription>(subscriptionViewModel);

                subscription.UpdateSubscription(subcription);

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
                var result =  subscription.DeleteSubscription(id);
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
                throw;
            }
        }
    }
}
