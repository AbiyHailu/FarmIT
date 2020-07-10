using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class Subscription 
    {
        [Key]
        public Guid Id { get; set; } 
        public Guid UserId { get; set; }
        public DateTime SubscriptionDate { get; set; }
        public DateTime SubscriptionEndDate { get; set; }


        //with user one to subscription  
        public Guid PlanId { get; set; }
        public List<Plan> Plans { get; set; }
    }
}
