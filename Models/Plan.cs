using System;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class Plan 
    {
        [Key]
        public Guid Id { get; set; }
        public string PlanName { get; set; }
    }
}
