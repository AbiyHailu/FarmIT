﻿using Models.Store;
using System;
using System.Collections.Generic;
using ViewModels.StoreViewModels;

namespace Interface.StoreInterface
{
    public interface IProduct
    {
        string InsertProduct(Product product);
        List<ProductViewModel> GetProductList();
        ProductViewModel GetProductbyId(Guid productId);
        bool UpdateProduct(Product  product);
        bool DeleteProduct(Guid productId);
        bool CheckProductExits(string productname);
    }
}
