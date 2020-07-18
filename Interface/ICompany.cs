using Models;
using System.Collections.Generic;
using ViewModels;

namespace Interface
{
    public interface ICompany
    {
        void InsertPlan(Company company);
        List<CompanyDisplayViewModel> GetCompanyList();
        CompanyDisplayViewModel GetCompanybyId(int companyId);
        bool DeleteCompany(int companyId);
        bool UpdateCompany(Company company);
    }
}
