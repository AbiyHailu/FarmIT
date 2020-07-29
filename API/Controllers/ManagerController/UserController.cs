using Interface.UserInterface;
using Microsoft.AspNetCore.Mvc;
using Models.ManagerModels;
using System;
using System.Collections.Generic;
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
        public IEnumerable<UserListVM> Get()
        {
            return user.GetUserList();
        }


        [HttpGet("{id}")]
        public UserViewModel Get(Guid id)
        {
            return user.GetUserbyId(id);
        }


        [HttpPost]
        public string Post(User newuser)
        {
            return user.InsertUser(newuser);
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
