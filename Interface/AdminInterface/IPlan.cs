using Models.AdminModels;
using System;
using System.Collections.Generic;
using ViewModels.AdminViewModels;

namespace Interface.AdminInterface
{
    public interface IPlan
    {
        void InsertPlan(Plan plan);
        List<PlanListViewModel> GetPlanList();
        bool CheckPlanExits(Guid planName);
        PlanViewModel GetPlanbyId(int planId);
        bool DeletePlan(Guid planId);
        bool UpdatePlan(Plan plan);
    }
}
