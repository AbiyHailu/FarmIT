using Interface.StoreInterface;
using Models.Store;
using System;
using System.Collections.Generic;
using System.Linq;
using ViewModels.StoreViewModels;

namespace Concrete.ManagerConcrete.StoreConcrete
{
    public class RecieveProductConcrete : IRecieveProduct
    {
        private readonly AdminContext context;
        public RecieveProductConcrete(AdminContext context)
        {
            this.context = context;
        }
        public List<RecievedProductViewModel> GetRecievedProductList()
        {
            var result = (from recievedProduct in context.RecieveProducts
                          join product in context.Products on recievedProduct.Id equals product.Id
                          select new RecievedProductViewModel
                          {
                              Id = recievedProduct.Id,
                              ProductName = product.Name,
                              ProductId = recievedProduct.ProductId, 
                              Amount = recievedProduct.Amount,
                              RecievedeDate = recievedProduct.RecievedeDate

                          }).ToList();
            return result;
        }

        public RecievedProductViewModel GetRecievedProductbyId(Guid recievedProductId)
        {
            var result = (from recievedProduct in context.RecieveProducts 
                          where recievedProduct.Id == recievedProductId
                          join product in context.Products on recievedProduct.Id equals product.Id
                          select new RecievedProductViewModel
                          {
                              Id = recievedProduct.Id,
                              ProductName = product.Name,
                              ProductId = recievedProduct.ProductId,
                              Amount = recievedProduct.Amount,
                              RecievedeDate = recievedProduct.RecievedeDate

                          }).FirstOrDefault(); 
            return result;
        }
         
        public string InsertRecieveddProduct(RecieveProduct recieveProduct)
        {
            context.RecieveProducts.Add(recieveProduct);
            context.SaveChangesAsync();
            return recieveProduct.Id.ToString();
        }

        public bool UpdateRecievedProduct(RecieveProduct recievedProduct)
        {
            context.Entry(recievedProduct).Property(x => x.ProductId).IsModified = true;
            context.Entry(recievedProduct).Property(x => x.RecievedeDate).IsModified = true;
            context.Entry(recievedProduct).Property(x => x.Amount).IsModified = true;

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
 
        public bool DeleteRecievedProduct(Guid recievedProductId)
        {

            var RecievedProductToRemove = (from recieveProduct in context.RecieveProducts
                                        where recieveProduct.Id == recievedProductId
                                           select recieveProduct).FirstOrDefault();
            if (RecievedProductToRemove != null)
            {
                context.RecieveProducts.Remove(RecievedProductToRemove);
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
