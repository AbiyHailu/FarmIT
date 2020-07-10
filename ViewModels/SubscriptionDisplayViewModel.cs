using System;

namespace ViewModels
{
    public class SubscriptionDisplayViewModel
    {
        public Guid PlanId { get; set; }
        public Guid UserId { get; set; }
        public DateTime SubscriptionDate { get; set; }
        public DateTime SubscriptionEndDate { get; set; }
    } 
  
}
