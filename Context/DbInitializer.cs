using Models;
using System;
using System.Linq;

namespace Concrete
{
    public class DbInitializer
    {
        public static void Initialize(FarmItContext context)
        { 
            context.Database.EnsureCreated();
            if (!context.Subscriptions.Any())
            {
                var subscriptions = new  Subscription[]   
                {
                    new Subscription{ SubscriptionDate=new DateTime()}, 
                };

                foreach (Subscription s in subscriptions)
                {
                    context.Subscriptions.Add(s);
                }
                context.SaveChanges(); 
            }
        }
    }
}
