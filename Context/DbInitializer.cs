using Models.AdminModels;
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

            if (!admincontext.Companys.Where(e => e.UserType == "Manager").Any())
            {
                var companys = new Company[]
                {
                     new Company{ Name="Flower1", UserType ="Manager" , Emailaddress="abiyo02@yahoo.com", Password="12345", Phone="123456"},
                     new Company{ Name="Flower2", UserType ="Manager" , Emailaddress="abiyo02@yahoo.com", Password="12345", Phone="123456"},
                     new Company{ Name="Flower3", UserType ="Manager" , Emailaddress="abiyo02@yahoo.com", Password="12345", Phone="123456"},
                     new Company{ Name="Flower4", UserType ="Manager" , Emailaddress="abiyo02@yahoo.com", Password="12345", Phone="123456"}
                };

                foreach (Company c in companys)
                {
                    admincontext.Companys.Add(c);
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
            };

            if (!admincontext.PlanSubscriptions.Any())
            {
                var subscriptions = new PlanSubscription[]
                {
                    new PlanSubscription { CompanyId = new Guid("c0bc9d2d-856e-4821-cc8b-08d867999975"), PlanId = new Guid("10d6f392-18f3-4e02-ca31-08d867999de9"), SubscriptionDate =  new DateTime(2020, 6 , 23) , SubscriptionEndDate = new DateTime(2020, 7 , 23) },
                    new PlanSubscription { CompanyId = new Guid("c0bc9d2d-856e-4821-cc8b-08d867999975"), PlanId = new Guid("fcec75db-cbc5-4fc7-ca33-08d867999de9"), SubscriptionDate =  new DateTime(2020, 5 , 23) , SubscriptionEndDate = new DateTime(2020, 7 , 10) },
                };

                foreach (PlanSubscription s in subscriptions)
                {
                    admincontext.PlanSubscriptions.Add(s);
                }
                admincontext.SaveChanges();
            }


            if (!admincontext.Companys.Where(e => e.UserType == "Admin").Any())
            {
                var companys = new Company[]
                {

                    new Company{ Name="IT4Flower1", UserType ="Admin" , Emailaddress="abiyo02@yahoo.com", Password="12345", Phone="123456"}
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
