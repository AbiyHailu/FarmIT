using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using AutoMapper;
using Interface.StoreInterface;
using Microsoft.AspNetCore.Mvc;
using Models.Store;
using ViewModels.StoreViewModels;

namespace API.Controllers.ManagerController.StoreController
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecievedProductsController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly IRecieveProduct recieveProduct;

        public RecievedProductsController(IRecieveProduct recieveProduct, IMapper mapper)
        {
            this.mapper = mapper;
            this.recieveProduct = recieveProduct;
        }

        [HttpGet]
        public IEnumerable<RecievedProductViewModel> Get()
        {
            return recieveProduct.GetRecievedProductList();
        }
         
        //TODO: also add filter by date etc... also for issued 
        [HttpGet("{id}")]
        public RecievedProductViewModel Get(Guid id)
        {
            return recieveProduct.GetRecievedProductbyId(id);
        }
         
        [HttpPost]
        public HttpResponseMessage Post([FromBody] string value)
        {
            try
            {
                var newRecieve = mapper.Map<RecieveProduct>(value);
                recieveProduct.InsertRecieveddProduct(newRecieve);

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
        public HttpResponseMessage Put(Guid id, [FromBody] string value)
        {
            try
            {
                var updatedRecieve= mapper.Map<RecieveProduct>(value);
                recieveProduct.UpdateRecievedProduct(updatedRecieve);

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
                var result = recieveProduct.DeleteRecievedProduct(id);

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
