using Interface.AdminInterface;
using Microsoft.Extensions.Configuration;
using Models.AdminModels;
using System;
using System.Collections.Generic;
using System.Linq;
using ViewModels.AdminViewModels;

namespace Concrete.AdminConcrete
{
    public class CompanyConcrete : ICompany
    {
        private readonly IConfiguration configuration;
        private readonly AdminContext context;
        public CompanyConcrete(AdminContext context, IConfiguration configuration)
        {
            this.context = context;
            this.configuration = configuration;

        }
        public List<CompanyViewModel> GetCompanyList()
        {
            var result = (from company in context.Companys
                          //TODO: join Plans here 
                         // join subscription in context.Subscriptions on issuedProduct.Id equals product.Id
                          select new CompanyViewModel
                          {  Id = company.Id,
                              Name = company.Name,
                              Password=company.Password,
                              UserType=company.UserType,
                              Emailaddress=company.Emailaddress 
                          }).ToList(); 
            return result;
        }


        public CompanyViewModel GetCompanybyId(Guid companyId)
        {
            var result = (from company in context.Companys
                          where company.Id == companyId
                          select new CompanyViewModel
                          {
                              Id = company.Id,
                              Name = company.Name,
                              Password = company.Password,
                              UserType = company.UserType,
                              Emailaddress = company.Emailaddress
                          }).FirstOrDefault();
            return result;
        }
         
        public string InsertCompany(Company company)
        {
            context.Companys.Add(company);
            context.SaveChangesAsync();
            return company.Id.ToString();
        } 
        public bool UpdateCompany(Company company)
        {
            context.Entry(company).Property(x => x.Name).IsModified = true;
            context.Entry(company).Property(x => x.Phone).IsModified = true;
            context.Entry(company).Property(x => x.UserType).IsModified = true;
            context.Entry(company).Property(x => x.Emailaddress).IsModified = true;
            context.Entry(company).Property(x => x.Password).IsModified = true;

            var result = context.SaveChanges();
            if (result > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        public bool DeleteCompany(Guid companyId)
        {
            var companyToRemove = (from company in context.Companys
                                   where company.Id == companyId
                                   select company).FirstOrDefault();
            if (companyToRemove != null)
            {
                context.Companys.Remove(companyToRemove);
                var result = context.SaveChanges();

                if (result > 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
        }
         
    }
}
