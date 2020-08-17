using Interface.AdminInterface;
using Models.AdminModels;
using System;
using System.Collections.Generic;
using System.Linq;
using ViewModels.AdminViewModels;

namespace Concrete.AdminConcrete
{
    public class PlanConcrete:IPlan
    { 
        private readonly AdminContext context;
        public PlanConcrete(AdminContext context )
        {
            this.context = context; 
        }
 
        public List<PlanViewModel> GetPlanList()
        {
            var result = (from plan in context.Plans
                          select new PlanViewModel
                          {
                              PlanId = plan.Id,
                              PlanName = plan.PlanName,
                              Price = plan.Price 

                          }).ToList();

            return result;
        }
  
        public PlanViewModel GetPlanbyId(Guid planId)
        {
            var result = (from plan in context.Plans
                          where plan.Id == planId
                          select new PlanViewModel
                          {
                              PlanId = plan.Id,
                              PlanName = plan.PlanName,
                              Price = plan.Price

                          }).FirstOrDefault();

            return result;
        }
         
        public string InsertPlan(Plan plan)
        {
            context.Plans.Add(plan);
            context.SaveChanges();
            return plan.Id.ToString();
        }

        public bool UpdatePlan(Plan plan)
        {
            context.Entry(plan).Property(x => x.PlanName).IsModified = true;
            context.Entry(plan).Property(x => x.Price).IsModified = true; 

            var result = context.SaveChanges();
            if (result > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
         
        public bool DeletePlan(Guid planId)
        {
            var planToRemove = (from plan in context.Plans
                                where plan.Id == planId
                                select plan).FirstOrDefault();
            if (planToRemove != null)
            {
                context.Plans.Remove(planToRemove);
                var result = context.SaveChanges();

                if (result > 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
        }
    }
}
