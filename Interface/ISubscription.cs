using Models;
using System;
using System.Collections.Generic;
using ViewModels;

namespace Interface
{
    public interface ISubscription
    {
        void InsertSubscription(Subscription plan);
        List<SubscriptionListViewModel> GetSubscriptionList();
        bool CheckPlanExits( Guid planName);
        SubscriptionViewModel GetSubscriptionbyId(int subscriptionId);
        bool DeleteSubscription(int subscriptionId);
        bool UpdateSubscription(Subscription subscription);
    }
}
