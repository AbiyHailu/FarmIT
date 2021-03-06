﻿using Models.AdminModels;
using System;
using System.Collections.Generic;
using ViewModels.AdminViewModels;

namespace Interface.AdminInterface
{
    public interface ICompany
    {
        string InsertCompany(Company company);
        List<CompanyViewModel> GetCompanyList();
        CompanyViewModel GetCompanybyId(Guid companyId);
        bool DeleteCompany(Guid companyId);
        bool UpdateCompany(Company company);
    }
}
