using System;
using System.Collections.Generic; 
using Interface.StoreInterface;
using Microsoft.AspNetCore.Mvc;
using Models.Store;
using ViewModels.StoreViewModels;

namespace API.Controllers.ManagerController.StoreController
{
    [Route("api/[controller]")]
    [ApiController]
    public class IssuedProductsController : ControllerBase
    {
        private IIssueProduct issueProduct;
        public IssuedProductsController(IIssueProduct isueProduct)
        {
            this.issueProduct = isueProduct;

        }

        [HttpGet]
        public IEnumerable<IssuedProductViewModel> Get()
        {
            return issueProduct.GetIssuedProductList();
        }
         
        [HttpGet("{id}")]
        public IssuedProductViewModel Get(Guid id)
        {
            return issueProduct.GetIssuedProductbyId(id);
        }
         
        [HttpPost]
        public void Post([FromBody] string value)
        {
         //   return issueProduct.InsertIssuedProduct();
        }

        // PUT api/<IssuedProductsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<IssuedProductsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
