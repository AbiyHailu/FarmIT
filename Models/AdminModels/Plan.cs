using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models.AdminModels
{
    public class Plan 
    {
        [Key]
        public Guid Id { get; set; }
        public string PlanName { get; set; }
        [Column(TypeName = "decimal(10,2)")]
        public decimal Price { get; set; } 
        public ICollection<Subscription> Subscription { get; set; }
    }
}
