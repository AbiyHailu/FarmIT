using Models.AdminModels;
using System;
using System.Collections.Generic;
using ViewModels;
using ViewModels.AdminViewModels;

namespace Interface.AdminInterface
{
    public interface ISubscription
    {
        void InsertSubscription(Subscription plan);
        List<SubscriptionListViewModel> GetSubscriptionList();
        List<SubscriptionListViewModel> GetSubscriptionbyCompanyId(Guid companyId);
        bool CheckPlanExits( Guid planName);
        SubscriptionViewModel GetSubscriptionbyId(Guid subscriptionId); 
       
        bool DeleteSubscription(Guid subscriptionId);
        bool UpdateSubscription(Subscription subscription);
    }
}
