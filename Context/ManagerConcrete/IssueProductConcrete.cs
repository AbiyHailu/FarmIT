using Interface.StoreInterface;
using Models.Store;
using System;
using System.Collections.Generic;
using System.Linq;
using ViewModels.StoreViewModels;

namespace Concrete.ManagerConcrete
{
    public class IssueProductConcrete : IIssueProduct
    {
        private readonly AdminContext context;
        public IssueProductConcrete(AdminContext context)
        {
            this.context = context;
        }
        public List<IssuedProductViewModel> GetIssuedProductList()
        {

            var result = (from issuedProduct in context.IssueProducts
                          select new IssuedProductViewModel
                          {
                              Id = issuedProduct.Id,
                              IssueddeDate = issuedProduct.IssueddeDate,
                              ProductId = issuedProduct.ProductId,
                              DepartmentId = issuedProduct.DepartmentId,
                              Amount = issuedProduct.Amount,
                              Reason=issuedProduct.Reason
                          }).ToList();
            return result;
        }


        public IssuedProductViewModel GetIssuedProductbyId(Guid issuedProductId)
        {
            var result = (from issuedProduct in context.IssueProducts
                          where issuedProduct.Id == issuedProductId
                          select new IssuedProductViewModel
                          {
                              Id = issuedProduct.Id,
                              IssueddeDate = issuedProduct.IssueddeDate,
                              ProductId = issuedProduct.ProductId,
                              DepartmentId = issuedProduct.DepartmentId,
                              Amount = issuedProduct.Amount,
                              Reason = issuedProduct.Reason
                          }).FirstOrDefault();
            return result;
        }

        
        public string InsertIssuedProduct(IssueProduct issuedProduct)
        {
            context.IssueProducts.Add(issuedProduct);
            context.SaveChangesAsync();
            return issuedProduct.Id.ToString();
        }

        public bool UpdateIssuedProduct(IssuedProductViewModel issuedproduct)
        {
            context.Entry(issuedproduct).Property(x => x.ProductId).IsModified = true;
            context.Entry(issuedproduct).Property(x => x.DepartmentId).IsModified = true;
            context.Entry(issuedproduct).Property(x => x.IssueddeDate).IsModified = true;
            context.Entry(issuedproduct).Property(x => x.Amount).IsModified = true;
            context.Entry(issuedproduct).Property(x => x.Reason).IsModified = true;

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
        
        public bool CheckIssuedProductExits(Guid issuedProductId)
        {
            var result = (from issuedProduct in context.IssueProducts
                          where issuedProduct.Id == issuedProductId
                          select issuedProduct).Count();

            return result > 0 ? true : false;
        }

        public bool DeleteIssuedProduct(Guid issuedProductId)
        {
            throw new NotImplementedException();
        }
    }
}
