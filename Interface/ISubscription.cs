using Models;
using System.Collections.Generic;
using ViewModels;

namespace Interface
{
    public interface ISubscription
    {
        void InsertPlan(Subscription plan);
        List<SubscriptionDisplayViewModel> GetSubscriptionList();
        SubscriptionDisplayViewModel GetSubscriptionbyId(int subscriptionId);
        bool DeleteSubscription(int subscriptionId);
        bool UpdateSubscription(Subscription subscription);
    }
}
