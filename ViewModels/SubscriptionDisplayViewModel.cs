using System;

namespace ViewModels
{
    public class SubscriptionDisplayViewModel
    {
        public Guid CompanyId { get; set; } 
        public Guid PlanId { get; set; } 
        public DateTime SubscriptionDate { get; set; }
        public DateTime SubscriptionEndDate { get; set; }
    } 
  
}
