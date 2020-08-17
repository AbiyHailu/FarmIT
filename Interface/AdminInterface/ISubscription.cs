using Models.AdminModels;
using System;
using System.Collections.Generic;
using ViewModels;
using ViewModels.AdminViewModels;

namespace Interface.AdminInterface
{
    public interface ISubscription
    {
        string InsertSubscription(Subscription subscription);
        List<SubscriptionViewModel> GetSubscriptionList();
        List<SubscriptionViewModel> GetSubscriptionbyCompanyId(Guid companyId); 
        SubscriptionViewModel GetSubscriptionbyId(Guid subscriptionId);  
        bool DeleteSubscription(Guid subscriptionId);
        bool UpdateSubscription(Subscription subscription);
    }
}
