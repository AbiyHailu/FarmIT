using System;
using System.Collections.Generic;
using ViewModels.UserViewModels;

namespace Interface.UserInterface
{
    public interface  ICmpanyUserPermission
    { 
        void InsertCompanyUserPermission(CompanyUserPermissionVM companyUserPermission);
        bool UpdateCompanyUserPermission(CompanyUserPermissionVM companyUserPermission);
        List<CompanyUserPermissionVM> GetCompanyUserPermissionList();
        CompanyUserPermissionVM GetCompanyUserPermissionbyId(Guid Id);
        bool DeleteCompanyUserPermission(Guid  Id);
    }
}
