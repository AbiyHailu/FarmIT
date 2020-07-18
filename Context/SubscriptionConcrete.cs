using Interface;
using Microsoft.Extensions.Configuration;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using ViewModels;

namespace Concrete
{ 
        public   class SubscriptionConcrete : ISubscription
        {
            private readonly IConfiguration configuration;
            private readonly FarmItContext  context;
            public SubscriptionConcrete(FarmItContext context, IConfiguration configuration)
            {
                this.context = context;
                this.configuration = configuration;

            }

        public bool DeleteSubscription(int subscriptionId)
        {
            throw new NotImplementedException();
        }

        public List<SubscriptionDisplayViewModel> GetPlanMasterList()
        {
            var result = (from subscription in context.Subscriptions
                          select new SubscriptionDisplayViewModel
                          {
                              SubscriptionDate = subscription.SubscriptionDate,
                              SubscriptionEndDate = subscription.SubscriptionEndDate

                          }).ToList();

             return result; 
        }

        public SubscriptionDisplayViewModel GetSubscriptionbyId(int subscriptionId)
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

        public void InsertPlan(Subscription plan)
        {
            throw new NotImplementedException();
        }

        public bool UpdateSubscription(Subscription subscription)
        {
            throw new NotImplementedException();
        }

        List<global::ViewModels.SubscriptionDisplayViewModel> ISubscription.GetSubscriptionList()
        {
            throw new NotImplementedException();
        }
    }
} 
