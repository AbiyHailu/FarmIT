using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class Subscription 
    {
        [Key]
        public Guid Id { get; set; } 
        public Guid CompanyId { get; set; }
        public DateTime SubscriptionDate { get; set; }
        public DateTime SubscriptionEndDate { get; set; }  
        public Guid PlanId { get; set; }
        public  Plan  Plans { get; set; }
    }
}
