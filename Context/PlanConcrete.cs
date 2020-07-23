using Interface;
using Microsoft.Extensions.Configuration;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using ViewModels;

namespace Concrete
{
   public class PlanConcrete:IPlan
    {
        private readonly IConfiguration configuration;
        private readonly FarmItContext context;
        public PlanConcrete(FarmItContext context, IConfiguration configuration)
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
