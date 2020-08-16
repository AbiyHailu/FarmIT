using Models.Store;
using System;
using System.Collections.Generic;
using ViewModels.StoreViewModels;

namespace Interface.StoreInterface
{
    public interface IStoreBalance
    {
        string InsertStoreBalance(StoreBalance storeBalance);
        List<StoreBalanceViewModel> GetStoreBalanceList();
        StoreBalanceViewModel GetStoreBalancebyProductId(Guid  ProductId);//TODO:Filter by latest date 
        bool UpdateStoreBalance(StoreBalance storeBalance);
        bool DeleteStoreBalance(Guid issuedProductId);//Not Important
    }
}
