using Models.Store;
using System;
using System.Collections.Generic;
using ViewModels.StoreViewModels;

namespace Interface.StoreInterface
{
    public interface IIssueProduct
    {
        string InsertIssuedProduct(IssueProduct issuedProduct);
        List<IssuedProductViewModel> GetIssuedProductList();
        IssuedProductViewModel GetIssuedProductbyId(Guid issuedProductId);
        bool UpdateIssuedProduct(IssuedProductViewModel issuedproduct);
        bool DeleteIssuedProduct(Guid issuedProductId);
        bool CheckIssuedProductExits(Guid id);//ToDO: id or name??
    }
}
