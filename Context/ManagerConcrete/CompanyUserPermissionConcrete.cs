
using Interface.UserInterface;
using Models.AdminModels;
using Models.ManagerModels;
using System;
using System.Collections.Generic;  
using System.Linq;
using ViewModels.UserViewModels;

namespace Concrete.ManagerConcrete
{
    public class CompanyUserPermissionConcrete : ICmpanyUserPermission
    {
        private readonly AdminContext  context;
        public CompanyUserPermissionConcrete(AdminContext context)
        {
            this.context = context;
        }

        public List<CompanyUserPermissionVM> GetCompanyUserPermissionList()
        {
            var result = (from userpermission in context.CompanyUserPermissions
                          join company in context.Companys on userpermission.CompanyId equals company.Id 
                          join plan in context.Plans on userpermission.PlanId equals plan.Id
                          join user in context.Users on userpermission.UserId  equals user.UserID
                          select new CompanyUserPermissionVM
                          {
                              CompanyName = company.Name,
                              PlanName = plan.PlanName,
                              UserName = $"{user.FirstName}''{user.FirstName}" 
                          }).ToList();
            return result;
        }

        //Todo: make for each user, company and plan when you need it 
        public CompanyUserPermissionVM GetCompanyUserPermissionbyId(Guid Id)
        {
            throw new NotImplementedException();
        } 
        
        public string InsertCompanyUserPermission(CompanyUserPermission companyUserPermission)
        {
            context.CompanyUserPermissions.Add(companyUserPermission);
            context.SaveChangesAsync();
            return companyUserPermission.Id.ToString();
        }

        public bool UpdateCompanyUserPermission(CompanyUserPermission  companyUserPermission)
        {
            context.Entry(companyUserPermission).Property(x => x.CompanyId).IsModified = false;
            context.Entry(companyUserPermission).Property(x => x.PlanId).IsModified = true;
            context.Entry(companyUserPermission).Property(x => x.UserId).IsModified = true; 

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

        //Todo: make for each user, company and plan when you need it 
        public bool DeleteCompanyUserPermission(Guid Id)
        {
            //var PermissionToRemove = (from issueProduct in context.IssueProducts
            //                            where issueProduct.Id == issuedProductId
            //                            select issueProduct).FirstOrDefault();
            //if (IssueProductToRemove != null)
            //{
            //    context.IssueProducts.Remove(IssueProductToRemove);
            //    var result = context.SaveChanges();

            //    if (result > 0)
            //    {
            //        return true;
            //    }
            //    else
            //    {
            //        return false;
            //    }
            //}
            //else
            //{
            //    return false;
            //}   
            throw new NotImplementedException();
        }
    }
}
