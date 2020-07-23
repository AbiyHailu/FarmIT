using Models.AdminModels;
using System;
using System.Collections.Generic;
using ViewModels;

namespace Interface
{
    public interface ICompany
    {
        void InsertCompany(Company company);
        List<CompanyViewModel> GetCompanyList();
        CompanyViewModel GetCompanybyId(Guid companyId);
        bool DeleteCompany(Guid companyId);
        bool UpdateCompany(Company company);
    }
}
