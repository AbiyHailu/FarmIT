using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace Models.AdminModels
{
    public class Plan 
    {
        [Key]
        public Guid Id { get; set; }
        public string PlanName { get; set; }
        public decimal Price { get; set; } 
        public ICollection<Subscription> Subscription { get; set; }
    }
}
