using Models.ManagerModels;
using System;
using System.Collections.Generic;
using ViewModels.UserViewModels;

namespace Interface.UserInterface
{
    public interface IUser
    {
        string InsertUser(User  User); 
        List<UserViewModel> GetUserList();
        UserViewModel GetUserbyId(Guid companyId);
        bool DeleteUser(Guid userId);
        bool UpdateUser(UserViewModel user);
        bool CheckUserExits(string emailaddress);
    }
}
