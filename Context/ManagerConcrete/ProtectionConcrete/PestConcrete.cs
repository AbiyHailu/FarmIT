using Interface.ProtectionInterface;
using Models.Protection;
using System;
using System.Collections.Generic;
using System.Linq;
using ViewModels.ProtectionVM;

namespace Concrete.ManagerConcrete.ProtectionConcrete
{
    public class PestConcrete : IPest
    {
        private readonly AdminContext context;
        public PestConcrete(AdminContext context)
        {
            this.context = context;
        }
 
        public void InsertPest(Pest  pest)
        {
            context.Pests.Add(pest);
            context.SaveChangesAsync(); 
        }
        public bool CheckIfPestExits(string pestname)
        {
            var result = (from pest in context.Pests
                          where pest.Name == pestname
                          select pest).Count();

            return result > 0 ? true : false;
        } 

        public List<PestViewModel> GetPestByCompanyId(string companyid)
        {
            var result = (from pest in context.Pests
                          where pest.Companyid.ToString() == companyid
                          select new PestViewModel
                          {
                              Id = pest.Id,
                              Name = pest.Name,
                              Description = pest.Description,
                              Syptoms = pest.Syptoms,
                              Image = pest.Image,
                              CompanyId = pest.Companyid
                          }).ToList() ;
            return result;
        } 

        public bool UpdatePest(PestViewModel pest)
        {
            context.Entry(pest).Property(x => x.Name).IsModified = true;
            context.Entry(pest).Property(x => x.Description).IsModified = true;
            context.Entry(pest).Property(x => x.Syptoms).IsModified = true;
            context.Entry(pest).Property(x => x.Image).IsModified = true; 

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
    }
}
 