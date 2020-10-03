using Interface.AdminInterface;
using Models.AdminModels;
using System;
using System.Collections.Generic;
using System.Linq;
using ViewModels.AdminViewModels;

namespace Concrete.AdminConcrete
{
    public   class SubscriptionConcrete : ISubscription
    { 
        private readonly AdminContext  context;
        public SubscriptionConcrete(AdminContext context )
        {
            this.context = context;  
        }

        List<SubscriptionViewModel> ISubscription.GetSubscriptionList()
        {
            var result = (from subscription in context.PlanSubscriptions
                          join plan in context.Plans on subscription.PlanId equals plan.Id
                          join company in context.Companys on subscription.CompanyId equals company.Id
                          select new SubscriptionViewModel
                          {
                              PlanId = subscription.PlanId,
                              CompanyId = subscription.CompanyId,
                              CompanyName = company.Name,
                              PlanName = plan.PlanName 
                          }).ToList();

            return result;
        } 
        public List<SubscriptionViewModel> GetSubscriptionbyCompanyId(Guid companyId)
        {
            var result = (from subscription in context.PlanSubscriptions
                          where subscription.CompanyId == companyId
                          join plan in context.Plans on subscription.PlanId equals plan.Id
                          join company in context.Companys on subscription.CompanyId equals company.Id

                          select new SubscriptionViewModel
                          {
                              PlanId = subscription.PlanId,
                              CompanyId = subscription.CompanyId,
                              PlanName = plan.PlanName

                          }).ToList();

            return result;
        }
      
        public string InsertSubscription(PlanSubscription subscription)
        {
            context.PlanSubscriptions.Add(subscription);
            context.SaveChangesAsync();
            return subscription.Id.ToString();
        }

        public SubscriptionViewModel GetSubscriptionbyId(Guid subscriptionId)
        {
            var result = (from subscription in context.PlanSubscriptions
                          where subscription.Id == subscriptionId
                          join plan in context.Plans on subscription.PlanId equals plan.Id
                          join company in context.Companys on subscription.CompanyId equals company.Id
                          select new SubscriptionViewModel
                          {
                              PlanId = subscription.PlanId,
                              CompanyId = subscription.CompanyId,
                              CompanyName = company.Name,
                              PlanName = plan.PlanName

                        }).FirstOrDefault();

            return result;
        }

        public bool UpdateSubscription(PlanSubscription subscription)
        {
            context.Entry(subscription).Property(x => x.PlanId).IsModified = true;
            context.Entry(subscription).Property(x => x.SubscriptionDate).IsModified = true;
            context.Entry(subscription).Property(x => x.SubscriptionEndDate).IsModified = true; 

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
        public bool DeleteSubscription(Guid subscriptionId)
        {
            var subscriptionToRemove = (from subscription in context.PlanSubscriptions
                                        where subscription.Id == subscriptionId
                                        select subscription).FirstOrDefault();
            if (subscriptionToRemove != null)
            {
                context.PlanSubscriptions.Remove(subscriptionToRemove);
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
