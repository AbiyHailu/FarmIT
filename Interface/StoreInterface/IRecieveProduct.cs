using Models.Store;
using System;
using System.Collections.Generic; 
using ViewModels.StoreViewModels;

namespace Interface.StoreInterface
{
    public interface IRecieveProduct
    {
        string InsertRecieveddProduct(RecieveProduct recieveProduct);
        List<RecievedProductViewModel> GetRecievedProductList();
        RecievedProductViewModel GetRecievedProductbyId(Guid recievedProductId);
        bool UpdateRecievedProduct(RecieveProduct  recievedProduct);
        bool DeleteRecievedProduct(Guid recievedProductId); 
    }
}
