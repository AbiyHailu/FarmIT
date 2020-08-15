using Models.ManagerModels;
using System;
using System.Collections.Generic;
using ViewModels.UserViewModels;

namespace Interface.UserInterface
{
    public interface  ICmpanyUserPermission
    { 
        string InsertCompanyUserPermission(CompanyUserPermission companyUserPermission);
        bool UpdateCompanyUserPermission(CompanyUserPermission companyUserPermission);
        List<CompanyUserPermissionVM> GetCompanyUserPermissionList();
        CompanyUserPermissionVM GetCompanyUserPermissionbyId(Guid Id);
        bool DeleteCompanyUserPermission(Guid  Id);
    }
}
