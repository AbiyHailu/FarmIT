﻿using System; 
using System.ComponentModel.DataAnnotations; 
namespace Models.AdminModels
{
    public class Company
    { 
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }  
    }
}