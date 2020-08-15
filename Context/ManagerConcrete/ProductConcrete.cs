using Interface.StoreInterface;
using Models.Store;
using System;
using System.Collections.Generic; 
using System.Linq; 
using ViewModels.StoreViewModels;

namespace Concrete.ManagerConcrete
{
    public class ProductConcrete : IProduct
    {
        private readonly AdminContext context;
        public ProductConcrete(AdminContext context)
        {
            this.context = context;
        } 
        public List<ProductViewModel> GetProductList()
        {
            var result = (from product in context.Products
                          select new ProductViewModel
                          {
                              Id = product.Id,
                              Name = product.Name,
                              Category = product.Category,
                              Description = product.Description,
                              ExpirationDate = product.ExpirationDate
                          }).ToList();
            return result;
        }
         
        public ProductViewModel GetProductbyId(Guid productId)
        {
            var result = (from product in context.Products
                          where product.Id == productId
                          select new ProductViewModel
                          {
                              Id = product.Id,
                              Name = product.Name,
                              Category = product.Category,
                              Description = product.Description,
                              ExpirationDate = product.ExpirationDate
                          }).FirstOrDefault();
            return result;
        } 

        public string InsertProduct(Product product)
        {
            context.Products.Add(product);
            context.SaveChangesAsync();
            return product.Id.ToString();
        }

        public bool UpdateProduct(ProductViewModel product)
        {
            context.Entry(product).Property(x => x.Name).IsModified = true;
            context.Entry(product).Property(x => x.Category).IsModified = true;
            context.Entry(product).Property(x => x.Description).IsModified = true;
            context.Entry(product).Property(x => x.ExpirationDate).IsModified = true;  

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

    
        public bool CheckProductExits(string productname)
        {
            var result = (from product in context.Products
                          where product.Name == productname
                          select product).Count();

            return result > 0 ? true : false;
        }

        public bool DeleteProduct(Guid productId)
        {
            var productToRemove = (from product in context.Products
                                where product.Id == productId
                                select product).FirstOrDefault();
            if (productToRemove != null)
            {
                context.Products.Remove(productToRemove);
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
    }
}
 