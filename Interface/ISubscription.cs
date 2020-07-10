using System.Collections.Generic;
using ViewModels;

namespace Interface
{
    public interface ISubscription
    {
        IEnumerable<string> GetSubscriptionList();
        List<SubscriptionDisplayViewModel> GetPlanMasterList();
    }
}
