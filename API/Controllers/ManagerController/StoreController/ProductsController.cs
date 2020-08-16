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
    public class ProductsController : ControllerBase
    {
        IMapper mapper;
        private IProduct product;
        public ProductsController(IMapper mapper, IProduct product)
        {
            this.product = product;
            this.mapper = mapper;
        }

        [HttpGet]
        public IEnumerable<ProductViewModel> Get()
        {
            return product.GetProductList();
        }

        [HttpGet("{id}")]
        public ProductViewModel Get(Guid id)
        {
            return product.GetProductbyId(id);
        }

        [HttpPost]
        public HttpResponseMessage Post([FromBody] Product prod)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    if (product.CheckProductExits(prod.Name))
                    {
                        var response = new HttpResponseMessage()
                        {
                            StatusCode = HttpStatusCode.Conflict
                        };

                        return response;
                    }

                    else
                    {
                        var newProd = mapper.Map<Product>(prod);
                        product.InsertProduct(newProd);

                        var response = new HttpResponseMessage()
                        {
                            StatusCode = HttpStatusCode.OK
                        };

                        return response;
                    }
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

        [HttpPut("{id}")]
        public HttpResponseMessage Put(Guid id, [FromBody] Product value)
        {
            try
            {
                var updatedProduct = mapper.Map<Product>(value);
                product.UpdateProduct(updatedProduct);

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
                var result = product.DeleteProduct(id);

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
