using System;

namespace ViewModels.AdminViewModels
{
    public class SubscriptionViewModel
    {
        public Guid Id { get; set; }
        public Guid CompanyId { get; set; } 
        public Guid PlanId { get; set; } 
        public DateTime SubscriptionDate { get; set; }
        public DateTime SubscriptionEndDate { get; set; }
        public string PlanName { get; set; } 
        public string CompanyName { get; set; }
    }  
}
