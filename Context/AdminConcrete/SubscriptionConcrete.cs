using Interface.AdminInterface;
using Microsoft.Extensions.Configuration;
using Models.AdminModels;
using System;
using System.Collections.Generic;
using System.Linq;
using ViewModels.AdminViewModels;

namespace Concrete.AdminConcrete
{
    public   class SubscriptionConcrete : ISubscription
        {
            private readonly IConfiguration configuration;
            private readonly AdminContext  context;
            public SubscriptionConcrete(AdminContext context, IConfiguration configuration)
            {
                this.context = context;
                this.configuration = configuration;

            } 
      

        public SubscriptionViewModel GetSubscriptionbyId(int subscriptionId)
        {
            throw new NotImplementedException();
        }

        //public void InsertPlan(Subscription plan)
        //{
        //    using (SqlConnection con = new SqlConnection(configuration.GetConnectionString("DatabaseConnection")))
        //    {
        //        var paramater = new DynamicParameters();
        //        paramater.Add("@PlanID", plan.PlanID);
        //        paramater.Add("@SchemeID", plan.SchemeID);
        //        paramater.Add("@PeriodID", plan.PeriodID);
        //        paramater.Add("@PlanName", plan.PlanName);
        //        paramater.Add("@PlanAmount", plan.PlanAmount);
        //        paramater.Add("@ServiceTax", plan.ServiceTax);
        //        paramater.Add("@CreateUserID", plan.CreateUserID);
        //        paramater.Add("@ModifyUserID", plan.ModifyUserID);
        //        paramater.Add("@RecStatus", plan.RecStatus);
        //        var value = con.Query<int>("sprocPlanMasterInsertUpdateSingleItem", paramater, null, true, 0, commandType: CommandType.StoredProcedure);
        //    }
        //} 

        //    public bool UpdatePlanMaster(PlanMaster planMaster)
        //    {
        //        context.Entry(planMaster).Property(x => x.RecStatus).IsModified = true;
        //        context.Entry(planMaster).Property(x => x.PlanAmount).IsModified = true;
        //        context.Entry(planMaster).Property(x => x.ServiceTax).IsModified = true;
        //        var result = context.SaveChanges();
        //        if (result > 0)
        //        {
        //            return true;
        //        }
        //        else
        //        {
        //            return false;
        //        }
        //    }

        //    public bool DeletePlan(int planId)
        //    {
        //        var planmaster = (from plan in context.PlanMaster
        //                          where plan.PlanID == planId
        //                          select plan).FirstOrDefault();
        //        if (planmaster != null)
        //        {
        //            context.PlanMaster.Remove(planmaster);
        //            var result = context.SaveChanges();

        //            if (result > 0)
        //            {
        //                return true;
        //            }
        //            else
        //            {
        //                return false;
        //            }
        //        }
        //        else
        //        {
        //            return false;
        //        }
        //    }

        //    public PlanMasterViewModel GetPlanMasterbyId(int planId)
        //    {
        //        var result = (from plan in context.PlanMaster
        //                      where plan.PlanID == planId
        //                      select new PlanMasterViewModel
        //                      {
        //                          PlanID = plan.PlanID,
        //                          PeriodID = plan.PeriodID,
        //                          RecStatus = plan.RecStatus,
        //                          SchemeID = plan.SchemeID,
        //                          ServiceTax = plan.ServiceTax,
        //                          PlanName = plan.PlanName,
        //                          PlanAmount = plan.PlanAmount,
        //                          ServicetaxNo = plan.ServicetaxNo,
        //                          ServicetaxAmount = plan.ServicetaxAmount,
        //                          TotalAmount = plan.TotalAmount
        //                      }).FirstOrDefault();

        //        return result;
        //    }
        //    public string GetAmount(int planId, int schemeId)
        //    {
        //        using (var con = new SqlConnection(configuration.GetConnectionString("DatabaseConnection")))
        //        {
        //            var para = new DynamicParameters();
        //            para.Add("@PlanID", planId);
        //            para.Add("@SchemeID", schemeId);
        //            return con.Query<string>("Usp_GetAmount_reg", para, null, true, 0, commandType: CommandType.StoredProcedure).SingleOrDefault();
        //        }
        //    }

        //    public int GetPlanMonthbyPlanId(int? planId)
        //    {
        //        var result = (from plan in context.PlanMaster
        //                      where plan.PlanID == planId
        //                      select plan.PeriodID).FirstOrDefault();
        //        return result;
        //    }

        public IEnumerable<string> GetSubscriptionList()
        {
            throw new NotImplementedException();
        }
         

        public void InsertSubscription(Subscription plan)
        {
            throw new NotImplementedException();
        }

        public bool UpdateSubscription(Subscription subscription)
        {
            throw new NotImplementedException();
        }  
        //public List<ActivePlanModel> GetActivePlanMasterList(int? schemeId)
        //    {
        //        var result = (from plan in context.PlanMaster
        //                      where plan.RecStatus == true && plan.SchemeID == schemeId
        //                      select new ActivePlanModel
        //                      {
        //                          PlanName = plan.PlanName,
        //                          PlanID = plan.PlanID.ToString()
        //                      }).ToList();

        //        return result;
        //    }
        List<SubscriptionListViewModel> ISubscription.GetSubscriptionList()
        {
            var result = (from subscription in context.Subscriptions
                          join plan in context.Plans on subscription.PlanId equals plan.Id
                          join company in context.Companys on subscription.CompanyId equals company.Id
                          select new SubscriptionListViewModel
                          {
                              PlanId= subscription.PlanId,
                              CompanyId = subscription.CompanyId,
                              CompanyName= company.Name,
                              PlanName= plan.PlanName

                          }).ToList();

            return result;
        }
        public  List<SubscriptionListViewModel> GetSubscriptionbyCompanyId(Guid companyId)
        {
            var result = (from subscription in context.Subscriptions 
                          where subscription.CompanyId == companyId
                          join plan in context.Plans on subscription.PlanId equals plan.Id
                          join company in context.Companys on subscription.CompanyId equals company.Id 
                        
                          select new SubscriptionListViewModel
                          {
                              PlanId = subscription.PlanId,
                              CompanyId = subscription.CompanyId, 
                              PlanName = plan.PlanName

                          }).ToList();

            return result;
        }


        public bool CheckPlanExits(Guid planName)
        {
            throw new NotImplementedException();
        }
         
        public bool DeleteSubscription(Guid subscriptionId)
        {
            throw new NotImplementedException();
        }

        public SubscriptionViewModel GetSubscriptionbyId(Guid subscriptionId)
        {
            throw new NotImplementedException();
        }
    }  
} 
