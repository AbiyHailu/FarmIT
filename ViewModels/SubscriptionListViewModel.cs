using System;

namespace ViewModels
{
    public class SubscriptionListViewModel
    {
        public Guid CompanyId { get; set; } 
        public Guid PlanId { get; set; } 
        public DateTime SubscriptionDate { get; set; }
        public DateTime SubscriptionEndDate { get; set; }
        public string PlanName { get; set; } 
        public string CompanyName { get; set; }
    } 
    public class SubscriptionViewModel
    {
        public Guid CompanyId { get; set; }
        public Guid PlanId { get; set; }
        public DateTime SubscriptionDate { get; set; }
        public DateTime SubscriptionEndDate { get; set; } 
    }  
}
