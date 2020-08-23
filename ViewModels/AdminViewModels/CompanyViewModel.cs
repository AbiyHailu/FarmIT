using Models.AdminModels;
using System;
using System.Collections.Generic;

namespace ViewModels.AdminViewModels
{
    public class CompanyViewModel
    {
        public Guid  Id { get; set; }
        public string Name { get; set; }
        public string Emailaddress { get; set; }
        public string Password { get; set; }
        public string Phone { get; set; }
        public string UserType { get; set; } 
    }
}
