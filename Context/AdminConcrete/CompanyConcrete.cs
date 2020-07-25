using Interface;
using Interface.AdminInterface;
using Microsoft.Extensions.Configuration;
using Models.AdminModels;
using System;
using System.Collections.Generic;
using System.Linq;
using ViewModels;
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
                          select new CompanyViewModel
                          {
                              Id = company.Id,
                              Name = company.Name

                          }).ToList();

            return result;
        }


        public CompanyViewModel GetCompanybyId(Guid companyId)
        {
            throw new NotImplementedException();
        }
         
        public void InsertCompany(Company company)
        {
            throw new NotImplementedException();
        } 
        public bool UpdateCompany(Company company)
        {
            throw new System.NotImplementedException();
        }
        public bool DeleteCompany(Guid companyId)
        {
            throw new NotImplementedException();
        }
         
    }
}
