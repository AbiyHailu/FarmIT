using System;
using System.Collections.Generic;

namespace ViewModels.UserViewModels
{
    public class UserViewModel
    {
        public Guid UserId { get; set; }
        public string Emailaddress { get; set; }
        public string Phone { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; } 
        public string Password { get; set; } 
        public List<CompanyUserPermissionVM> Permissions { get; set; }
    }
    
    public class UserListVM
    {
        public string Emailaddress { get; set; }
        public string Phone { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }  
        public string Password { get; set; }
    }
     
    public class UserLoginVM
    {
        public Guid Company { get; set; } 
        public string FirstName { get; set; } 
        public string Password { get; set; }

    }
    public class UseChangePasswordVM
    {
        public Guid Company { get; set; } 
        public string FirstName { get; set; } 
        public string Password { get; set; }
    }  
}
