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
                    new Subscription { PlanId= new Guid("8a2573db-a245-4b7c-8607-08d82b696f71"), SubscriptionDate=new DateTime()}, 
                };

                foreach (Subscription s in subscriptions)
                {
                    context.Subscriptions.Add(s);
                }
                context.SaveChanges(); 
            }

            if (!context.Plans.Any())
            {
                var plans = new Plan[]
                {
                    new Plan{ PlanName="Store"},
                    new Plan{ PlanName="Human Resource"},
                    new Plan{ PlanName="Protection"},
                    new Plan{ PlanName="Pack House"},
                    new Plan{ PlanName="Fertigatin"},
                    new Plan{ PlanName="Field Management"},
                    new Plan{ PlanName="Scout"},
                };

                foreach (Plan s in plans)
                {
                    context.Plans.Add(s);
                }
                context.SaveChanges();
            }
        }
    }
}
