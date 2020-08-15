using Interface.UserInterface;
using Models.ManagerModels;
using System;
using System.Collections.Generic;
using System.Linq;
using ViewModels.UserViewModels;

namespace Concrete.ManagerConcrete
{
    public class UserConcrete : IUser
    { 
        private readonly AdminContext context;

        public UserConcrete(AdminContext context)
        {
            this.context = context; 
        }
        public List<UserViewModel> GetUserList()
        {
            var result = (from user in context.Users 
                          select new UserViewModel
                          {
                              Emailaddress = user.Emailaddress,
                              FirstName = user.FirstName,
                              LastName = user.LastName,
                              Phone = user.Phone,
                              UserId=  user.UserID 
                          }).ToList(); 
            return result;
        }

        public UserViewModel GetUserbyId(Guid userId)
        {//Todo: include permission
            var result = (from user in context.Users
                          where user.UserID == userId
                          join permission in context.CompanyUserPermissions on userId equals permission.UserId 
                          select new UserViewModel
                          {
                              UserId = user.UserID,
                              Emailaddress = user.Emailaddress,
                              Phone = user.Phone,
                              FirstName = user.FirstName,
                              LastName =  user.LastName, 
                              //TOdo sort list join  => Permissions = permission.User,
                          }).FirstOrDefault(); 
            return result;
        } 

        public string InsertUser(User user)
        { 
                context.Users.Add(user);
                context.SaveChangesAsync();
                return user.UserID.ToString(); 
        } 

        public bool UpdateUser(User user)
        {
            context.Entry(user).Property(x => x.Emailaddress).IsModified = true;
            context.Entry(user).Property(x => x.Phone).IsModified = true;
            context.Entry(user).Property(x => x.FirstName).IsModified = true;
            context.Entry(user).Property(x => x.LastName).IsModified = true;
            context.Entry(user).Property(x => x.Password).IsModified = true; 
            context.Entry(user).Property(x => x.IsActive).IsModified = true;

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
         
        public bool DeleteUser(Guid userId)
        {
            var userToRemove = (from user in context.Users
                              where user.UserID == userId
                              select user).FirstOrDefault();
            if (userToRemove != null)
            {
                context.Users.Remove(userToRemove);
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
        public bool CheckUserExits(string emailaddress)
        {
            var result = (from user in context.Users
                          where user.Emailaddress == emailaddress
                          select user).Count();

            return result > 0 ? true : false;
        }
    }
}
