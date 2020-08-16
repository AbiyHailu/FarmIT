using AutoMapper;
using Interface.StoreInterface;
using Microsoft.AspNetCore.Mvc;
using Models.Store;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using ViewModels.StoreViewModels;

namespace API.Controllers.ManagerController.StoreController
{
    [Route("api/[controller]")]
    [ApiController]
    public class StoreBalanceController : ControllerBase
    {
        IMapper mapper;
        private IStoreBalance  storeBalance;
        public StoreBalanceController(IMapper mapper, IStoreBalance  storeBalance)
        {
            this.mapper = mapper;
            this.storeBalance = storeBalance;
        }
        [HttpGet]
        public IEnumerable<StoreBalanceViewModel> Get()
        {
            return storeBalance.GetStoreBalanceList();
        }
         
        [HttpGet("{id}")]
        public StoreBalanceViewModel Get(Guid id)
        {
            return storeBalance.GetStoreBalancebyProductId(id);
        }
         
        [HttpPost]
        public HttpResponseMessage Post([FromBody] string value)
        {
            try
            {
                var newBalance = mapper.Map<StoreBalance>(value);
                storeBalance.InsertStoreBalance(newBalance);
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
         
        [HttpPut("{id}")]
        public HttpResponseMessage Put(int id, [FromBody] StoreBalanceViewModel value)
        {
            try
            {
                var updatedBalance = mapper.Map<StoreBalance>(value);
                storeBalance.UpdateStoreBalance(updatedBalance);

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
                var result = storeBalance.DeleteStoreBalance(id);

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
