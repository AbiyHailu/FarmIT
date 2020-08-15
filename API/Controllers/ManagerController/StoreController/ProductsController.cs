using Interface.StoreInterface;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using ViewModels;
using ViewModels.StoreViewModels;

namespace API.Controllers.ManagerController.StoreController
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private IProduct product;
        public ProductsController(IProduct product)
        {
            this.product = product; 
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
        public void Post([FromBody] string value)
        {
        } 

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }
         
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
