using Interface.UserInterface;
using Models.ManagerModels;
using System;
using System.Collections.Generic;
using System.Linq;
using ViewModels.UserViewModels;

namespace Concrete.ManagerConcrete
{
    public class UserConcrete : IUser, ICmpanyUserPermission
    {
        //private readonly IConfiguration configuration; 
        private readonly AdminContext adminContext;

        public UserConcrete (AdminContext adminContext)
        { 
            this.adminContext = adminContext;
          //  this.configuration = configuration;
        }
        public List<UserListVM> GetUserList()
        {
            var result = (from user in adminContext.Users
                         // join companyUser in adminContext.CompanyUserPermissions on user.UserID equals companyUser.UserId 
                         // join plan in adminContext.Plans on companyUser.PlanId equals plan.Id
                        //  join company in adminContext.Companys on companyUser.CompanyId equals company.Id
                          select new UserListVM
                          {
                            Emailaddress=user.Emailaddress,
                            FirstName =user.FirstName,
                            LastName=user.LastName,
                            Phone=user.Phone,
                          //  Permissions = plan.PlanName 

                          }).ToList();

            return result;
        }

        public UserViewModel GetUserbyId(Guid companyId)
        {
            throw new NotImplementedException();
        } 
        //needs improvment
        public string InsertUser(User user)
        {
            var totalUser = GetUserList().Count();
            //total user all departments 2 except scou==10
            if (totalUser < 22) {
                adminContext.Users.Add(user);
                adminContext.SaveChangesAsync(); 
              return  user.UserID.ToString();
            } 
            else
            {
                return "User Limit Exceded";
            }
             
        }


        public bool UpdateUser(UserViewModel user)
        {
            throw new NotImplementedException();
        } 
        public bool DeleteUser(Guid userId)
        {
            throw new NotImplementedException();
        }

        public void InsertCompanyUserPermission(CompanyUserPermissionVM companyUserPermission)
        {
            throw new NotImplementedException();
        }

        public bool UpdateCompanyUserPermission(CompanyUserPermissionVM companyUserPermission)
        {
            throw new NotImplementedException();
        }

        public List<CompanyUserPermissionVM> GetCompanyUserPermissionList()
        {
            throw new NotImplementedException();
        }

        public CompanyUserPermissionVM GetCompanyUserPermissionbyId(Guid Id)
        {
            throw new NotImplementedException();
        }

        public bool DeleteCompanyUserPermission(Guid Id)
        {
            throw new NotImplementedException();
        }
    }
}
