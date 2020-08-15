
using AutoMapper;
using Interface.UserInterface;
using Microsoft.AspNetCore.Mvc;
using Models.ManagerModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using ViewModels.UserViewModels;

namespace API.Controllers.ManagerController
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly IUser user;  

        public UserController(IMapper mapper, IUser user)
        { 
            this.user = user;
            this.mapper = mapper;
        }

        [HttpGet]
        public IEnumerable<UserViewModel> Get()
        {
            return user.GetUserList();
        }


        [HttpGet("{id}")]
        public UserViewModel Get(Guid id)
        {
            return user.GetUserbyId(id);
        }  

        [HttpPost]
        public HttpResponseMessage Post([FromBody] UserViewModel newuservm)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    if (user.CheckUserExits(newuservm.Emailaddress))
                    {
                        var response = new HttpResponseMessage()
                        {
                            StatusCode = HttpStatusCode.Conflict
                        }; 

                        return response; 
                    } 
                    else if (Get().Count()>=22)
                    {
                        var response = new HttpResponseMessage()
                        {
                            Content = new StringContent("User limit is full.")
                        };

                        return response;
                    } 
                    else
                    { 
                        var newuser =  mapper.Map<User>(newuservm);
                        user.InsertUser(newuser);

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
        public void Put(int id, [FromBody] string value)
        {

        }
         
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
