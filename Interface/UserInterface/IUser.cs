using Models.ManagerModels;
using System;
using System.Collections.Generic;
using ViewModels.UserViewModels;

namespace Interface.UserInterface
{
    public interface IUser
    {
        string InsertUser(User User); 
        List<UserListVM> GetUserList();
        UserViewModel GetUserbyId(Guid companyId);
        bool DeleteUser(Guid userId);
        bool UpdateUser(UserViewModel user);
    }
}
