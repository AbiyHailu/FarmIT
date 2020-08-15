using Models.Store;
using System;
using System.Collections.Generic;
using ViewModels;

namespace Interface.StoreInterface
{
    public interface IProduct
    {
        string InsertProduct(Product product);
        List<ProductViewModel> GetProductList();
        ProductViewModel GetProductbyId(Guid productId);
        bool UpdateProduct(ProductViewModel product);
        bool DeleteProduct(Guid productId);
        bool CheckProductExits(string productname);
    }
}
