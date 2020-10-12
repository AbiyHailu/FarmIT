using AutoMapper;
using Interface.ProtectionInterface;
using Microsoft.AspNetCore.Mvc;
using Models.Protection;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using ViewModels.ProtectionVM;

namespace API.Controllers.ManagerController.ProtectionController
{
    [Route("api/[controller]")]
    [ApiController]
    public class PestsController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly IPest pests;

        public PestsController(IMapper mapper, IPest pests)
        {
            this.mapper = mapper;
            this.pests = pests;
        }

        [HttpGet("{id}")]
        public IEnumerable<PestViewModel> Get(string id)
        {
            return pests.GetPestByCompanyId(id);
        }

        [HttpPost]
        public HttpResponseMessage Post([FromBody] PestViewModel pest)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    if (pests.CheckIfPestExits(pest.Name))
                    {
                        var response = new HttpResponseMessage()
                        {
                            StatusCode = HttpStatusCode.Conflict
                        };

                        return response;
                    }

                    else
                    {
                        var newPest = mapper.Map<Pest>(pest);
                        pests.InsertPest(newPest);

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
        public HttpResponseMessage Put(Guid idId, [FromBody] PestViewModel value)
        {
            try
            {
                var updatedPest = mapper.Map<PestViewModel>(value);
                pests.UpdatePest(updatedPest);

                var response = new HttpResponseMessage()
                {
                    StatusCode = HttpStatusCode.OK
                };

                return response;
            }
            catch (Exception ex)
            { 
                throw ex;
            }
        } 
    }
}
