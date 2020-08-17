using Models.AdminModels;
using System;
using System.Collections.Generic;
using ViewModels.AdminViewModels;

namespace Interface.AdminInterface
{
    public interface IPlan
    {
        string InsertPlan(Plan plan);
        List<PlanViewModel> GetPlanList(); 
        PlanViewModel GetPlanbyId(Guid  planId);
        bool DeletePlan(Guid planId);
        bool UpdatePlan(Plan plan);
    }
}
