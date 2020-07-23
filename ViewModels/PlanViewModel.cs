using System;

namespace ViewModels
{
    public class PlanViewModel
    {
        public Guid PlanId { get; set; }   
        public string PlanName { get; set; }
    }
    public class PlanListViewModel{
        public Guid PlanId { get; set; }
        public string PlanName { get; set; }
    }
}
