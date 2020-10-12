using Models.Protection;
using System;
using System.Collections.Generic;
using ViewModels.ProtectionVM;

namespace Interface.ProtectionInterface
{
    public interface IPest
    { 
        void InsertPest(Pest pest);
        List<PestViewModel> GetPestByCompanyId( string companyid ); 
        bool UpdatePest(PestViewModel pest); 
        bool CheckIfPestExits(string pestName); 
    }
}
