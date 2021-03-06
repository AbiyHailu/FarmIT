﻿using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using AutoMapper;
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
        private readonly IMapper mapper;
        private IIssueProduct issueProduct;
        public IssuedProductsController(IMapper mapper, IIssueProduct isueProduct)
        {
            this.issueProduct = isueProduct; 
            this.mapper = mapper;
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
        public HttpResponseMessage Post([FromBody] IssuedProductViewModel value)
        {
            try
            {
                var newIssue = mapper.Map<IssueProduct>(value);
                issueProduct.InsertIssuedProduct(newIssue);

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
        public HttpResponseMessage Put(Guid id, [FromBody] IssuedProductViewModel value)
        {
            try
            {
                var updatedIssue = mapper.Map<IssueProduct>(value);
                issueProduct.UpdateIssuedProduct( updatedIssue);

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
                var result = issueProduct.DeleteIssuedProduct(id);

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
