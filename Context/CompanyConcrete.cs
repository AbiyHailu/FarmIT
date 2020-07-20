using Interface;
using Microsoft.Extensions.Configuration;
using Models;
using System.Collections.Generic;
using ViewModels;

namespace Concrete
{
    public class CompanyConcrete: ICompany
    {
        private readonly IConfiguration configuration;
        private readonly FarmItContext context;
        public CompanyConcrete(FarmItContext context, IConfiguration configuration)
        {
            this.context = context;
            this.configuration = configuration;

        }

        public bool DeleteCompany(int companyId)
        {
            throw new System.NotImplementedException();
        }

        public CompanyDisplayViewModel GetCompanybyId(int companyId)
        {
            throw new System.NotImplementedException();
        }

        public List<CompanyDisplayViewModel> GetCompanyList()
        {
            throw new System.NotImplementedException();
        }

        public void InsertPlan(Company company)
        {
            throw new System.NotImplementedException();
        }

        public bool UpdateCompany(Company company)
        {
            throw new System.NotImplementedException();
        }
    }
}
