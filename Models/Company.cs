﻿using System; 
using System.ComponentModel.DataAnnotations; 
namespace Models
{
    public class Company
    { 
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        //other l
        //lcatin
        //established Date
        //etc...
    }
}