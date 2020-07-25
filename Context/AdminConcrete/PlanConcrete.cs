using Interface.AdminInterface;
using Microsoft.Extensions.Configuration;
using Models.AdminModels;
using System;
using System.Collections.Generic;
using System.Linq;
using ViewModels.AdminViewModels;

namespace Concrete.AdminConcrete
{
    public class PlanConcrete:IPlan
    {
        private readonly IConfiguration configuration;
        private readonly AdminContext context;
        public PlanConcrete(AdminContext context, IConfiguration configuration)
        {
            this.context = context;
            this.configuration = configuration; 
        }
 
        public List<PlanListViewModel> GetPlanList()
        {
            var result = (from plan in context.Plans
                          select new PlanListViewModel
                          {
                              PlanId = plan.Id,
                              PlanName = plan.PlanName

                          }).ToList();

            return result;
        }

        public bool CheckPlanExits(Guid planName)
        {
            throw new NotImplementedException();
        }

        public bool DeletePlan(Guid planId)
        {
            throw new NotImplementedException();
        }

        public PlanViewModel GetPlanbyId(int planId)
        {
            throw new NotImplementedException();
        }

       

        public void InsertPlan(Plan plan)
        {
            throw new NotImplementedException();
        }

        public bool UpdatePlan(Plan plan)
        {
            throw new NotImplementedException();
        }
    }
}
