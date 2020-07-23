using Models;
using System;
using System.Collections.Generic;
using ViewModels;

namespace Interface
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
