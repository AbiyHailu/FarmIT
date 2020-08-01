using AutoMapper;
using Interface.UserInterface;
using Microsoft.AspNetCore.Mvc;
using Models.ManagerModels;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using ViewModels.UserViewModels;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers.ManagerController
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUser user;
        public UserController(IUser user)
        {
            this.user = user;
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


        //[HttpPost]
        //public string Post(User newuser)
        //{
        //    return user.InsertUser(newuser);
        //}
        [HttpPost]
       // public HttpResponseMessage Post([FromBody] User newuser)
       public string Post([FromBody] User newuser)
        {
            try
            {
                if (user.CheckUserExits(newuser.Emailaddress))
                {
                    //var response = new HttpResponseMessage()
                    //{
                    //    StatusCode = HttpStatusCode.Conflict
                    //};
                    return "User Already exist";
                }
                else
                {

                    //var x = new Mapper(null);
                    //var use = x.Map<User>(userViewModel);

                    user.InsertUser(newuser);

                    //var response = new HttpResponseMessage()
                    //{
                    //    StatusCode = HttpStatusCode.OK
                    //};

                    // return response;
                    return user.InsertUser(newuser);
              }
            }
            catch (Exception)
            {
                //var response = new HttpResponseMessage()
                //{
                //    StatusCode = HttpStatusCode.InternalServerError
                //};
                return "error";
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
