using System;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class BaseModel
    {
        [Key]
        public Guid Id { get; set; }
        public Guid Companyid { get; set; }
        public string Description { get; set; } 
    }
}
