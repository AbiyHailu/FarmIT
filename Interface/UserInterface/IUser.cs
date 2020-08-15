using Models.ManagerModels;
using System;
using System.Collections.Generic;
using ViewModels.UserViewModels;

namespace Interface.UserInterface
{
    public interface IUser
    {
        string InsertUser(User User); 
        List<UserViewModel> GetUserList();
        UserViewModel GetUserbyId(Guid userId);
        bool UpdateUser(User user);
        bool DeleteUser(Guid userId);
        bool CheckUserExits(string emailaddress);
    }
}
