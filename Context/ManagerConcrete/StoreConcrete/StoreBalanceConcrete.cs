using Interface.StoreInterface;
using Models.Store;
using System;
using System.Collections.Generic;
using ViewModels.StoreViewModels; 
using System.Linq;

namespace Concrete.ManagerConcrete.StoreConcrete
{
    public class StoreBalanceConcrete : IStoreBalance
    {

        private readonly AdminContext context;
        public StoreBalanceConcrete(AdminContext context)
        {
            this.context = context; 
        }
        public List<StoreBalanceViewModel> GetStoreBalanceList()
        {
           // Todo: chek if it has relation on model can i just acces it?? without join
            var result = (from storeBalance in context.StoreBalances
                          join product in context.Products on storeBalance.ProductId equals product.Id
                          select new StoreBalanceViewModel
                          {
                              ProductId = storeBalance.ProductId,
                              ProductName = product.Name,
                              Amount= storeBalance.Amount,
                              BalanceDate= storeBalance.BalanceDate 

                          }).ToList();

            return result;
        } 
        public StoreBalanceViewModel GetStoreBalancebyProductId(Guid productId)
        {
            var result = (from storeBalance in context.StoreBalances
                          where storeBalance.ProductId == productId
                          join product in context.Products on storeBalance.ProductId equals product.Id
                          select new StoreBalanceViewModel
                          {
                              ProductId = storeBalance.ProductId,
                              ProductName = product.Name,
                              Amount = storeBalance.Amount,
                              BalanceDate = storeBalance.BalanceDate

                          }).FirstOrDefault();

            return result;
        }
         
        public string InsertStoreBalance(StoreBalance storeBalance)
        {
            context.StoreBalances.Add(storeBalance);
            context.SaveChangesAsync();
            return storeBalance.ProductId.ToString();
        }

        public bool UpdateStoreBalance(StoreBalance storeBalance)
        { 
            context.Entry(storeBalance).Property(x => x.Amount).IsModified = true;
            context.Entry(storeBalance).Property(x => x.BalanceDate).IsModified = true; 

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
        public bool DeleteStoreBalance(Guid productId)
        {
            var StoreBalanceToRemove = (from storeBalance in context.StoreBalances
                                        where storeBalance.ProductId == productId
                                        select storeBalance).FirstOrDefault();
            if (StoreBalanceToRemove != null)
            {
                context.StoreBalances.Remove(StoreBalanceToRemove);
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
