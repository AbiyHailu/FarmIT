﻿using Models.AdminModels;
using Models.ManagerModels;
using System;
using System.Linq;

namespace Concrete
{
    public class DbInitializer
    {
        public static void Initialize(AdminContext admincontext)
        {
            admincontext.Database.EnsureCreated();
            if (!admincontext.Subscriptions.Any())
            {
                var subscriptions = new Subscription[]
                { 
                    new Subscription { CompanyId = new Guid("53dd7524-3129-4a9e-4886-08d82c28e2a9"), PlanId = new Guid("8a2573db-a245-4b7c-8607-08d82b696f71"), SubscriptionDate = new DateTime(), SubscriptionEndDate = new DateTime(2020, 7 , 23) }, 
                    new Subscription { CompanyId = new Guid("53dd7524-3129-4a9e-4886-08d82c28e2a9"), PlanId = new Guid("0ec4267c-2ed1-407e-8608-08d82b696f71"), SubscriptionDate = new DateTime(), SubscriptionEndDate = new DateTime(2020, 7 , 10) },
                    new Subscription { CompanyId = new Guid("53dd7524-3129-4a9e-4886-08d82c28e2a9"), PlanId = new Guid("66ae36e9-d8ab-4092-8609-08d82b696f71"), SubscriptionDate = new DateTime(), SubscriptionEndDate = new DateTime(2020, 8 , 22) },
                    new Subscription { CompanyId = new Guid("2c3a6385-ea4f-440f-4887-08d82c28e2a9"), PlanId = new Guid("dcc5b293-b2c0-4ced-860a-08d82b696f71"), SubscriptionDate = new DateTime(), SubscriptionEndDate = new DateTime(2020, 9 , 23) },
                    new Subscription { CompanyId = new Guid("1e748b17-a383-4eaf-4888-08d82c28e2a9"), PlanId = new Guid("acd8cf02-38e5-49ff-860b-08d82b696f71"), SubscriptionDate = new DateTime(), SubscriptionEndDate = new DateTime(2020, 7 , 22) },
                    new Subscription { CompanyId = new Guid("1e748b17-a383-4eaf-4888-08d82c28e2a9"), PlanId = new Guid("eea48db4-d3df-4673-860c-08d82b696f71"), SubscriptionDate = new DateTime(), SubscriptionEndDate = new DateTime(2020, 8 , 12) },
                    new Subscription { CompanyId = new Guid("1e748b17-a383-4eaf-4888-08d82c28e2a9"), PlanId = new Guid("36c48f31-f56a-44a4-860d-08d82b696f71"), SubscriptionDate = new DateTime(), SubscriptionEndDate = new DateTime(2020, 7 , 11) },
                    new Subscription { CompanyId = new Guid("18156313-33ea-40cb-4889-08d82c28e2a9"), PlanId = new Guid("8a2573db-a245-4b7c-8607-08d82b696f71"), SubscriptionDate = new DateTime(), SubscriptionEndDate = new DateTime(2020, 7 , 11) },
                    new Subscription { CompanyId = new Guid("18156313-33ea-40cb-4889-08d82c28e2a9"), PlanId = new Guid("0ec4267c-2ed1-407e-8608-08d82b696f71"), SubscriptionDate = new DateTime(), SubscriptionEndDate = new DateTime(2020, 8 , 12) },
                    new Subscription { CompanyId = new Guid("18156313-33ea-40cb-4889-08d82c28e2a9"), PlanId = new Guid("acd8cf02-38e5-49ff-860b-08d82b696f71"), SubscriptionDate = new DateTime(), SubscriptionEndDate = new DateTime(2020, 9 , 09) },
                    new Subscription { CompanyId = new Guid("ac097b1e-6d7a-4461-488a-08d82c28e2a9"), PlanId = new Guid("8a2573db-a245-4b7c-8607-08d82b696f71"), SubscriptionDate = new DateTime(), SubscriptionEndDate = new DateTime(2020, 7 , 21) },
                    new Subscription { CompanyId = new Guid("ac097b1e-6d7a-4461-488a-08d82c28e2a9"), PlanId = new Guid("dcc5b293-b2c0-4ced-860a-08d82b696f71"), SubscriptionDate = new DateTime(), SubscriptionEndDate = new DateTime(2020, 7 , 27) },
                    new Subscription { CompanyId = new Guid("ac097b1e-6d7a-4461-488a-08d82c28e2a9"), PlanId = new Guid("acd8cf02-38e5-49ff-860b-08d82b696f71"), SubscriptionDate = new DateTime(), SubscriptionEndDate = new DateTime(2020, 7 , 23) },
                };

                foreach (Subscription s in subscriptions)
                {
                    admincontext.Subscriptions.Add(s);
                }
                admincontext.SaveChanges(); 
            }

            if (!admincontext.Plans.Any())
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
                    admincontext.Plans.Add(s);
                }
                admincontext.SaveChanges();
            }
            if (!admincontext.Companys.Where(e=>e.UserType =="Admin").Any())
            {
                var companys = new Company[]
                {
                    //new Company{ Name="TestCompany1"},
                    //new Company{ Name="TestCompany3"},
                    //new Company{ Name="TestCompany3"},
                    //new Company{ Name="TestCompany4"},
                    //new Company{ Name="TestCompany5"},
                    new Company{ Name="IT4Flower", UserType ="Admin" , Emailaddress="abiyo02@yahoo.com", Password="12345", Phone="123456"}
                };

                foreach (Company c in companys)
                {
                    admincontext.Companys.Add(c);
                }
                admincontext.SaveChanges();
            }
            if (!admincontext.Users.Any())
            {
                var users = new User[]
                {
                    new User{ Emailaddress="abiy1@test.com", Phone="123456", FirstName="Abiy1", LastName="Sahle", Password ="123456"},
                    new User{ Emailaddress="abiy2@test.com", Phone="123456", FirstName="Abiy2", LastName="Sahle", Password ="123456"},
                    new User{ Emailaddress="abiy3@test.com", Phone="123456", FirstName="Abiy3", LastName="Sahle", Password ="123456"},
                    new User{ Emailaddress="abiy4@test.com", Phone="123456", FirstName="Abiy4", LastName="Sahle", Password ="123456"},
                    new User{ Emailaddress="abiy5@test.com", Phone="123456", FirstName="Abiy5", LastName="Sahle", Password ="123456"},
                    new User{ Emailaddress="abiy6@test.com", Phone="123456", FirstName="Abiy6", LastName="Sahle", Password ="123456"},
                };

                foreach (User u in users)
                {
                    admincontext.Users.Add(u);
                }
                admincontext.SaveChanges();
            }
        }
    }
}
