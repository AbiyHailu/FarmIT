using Microsoft.EntityFrameworkCore;
using Models.Store;
using System;
using System.Collections.Generic;
using System.Text;

namespace Concrete
{
   public class ManagerContext : DbContext
    {
        public ManagerContext(DbContextOptions options) : base(options)
        { }

        public DbSet<Product> Products { get; set; }
        public DbSet<StoreBalance> StoreBalances { get; set; }
        public DbSet<RecieveProduct> RecieveProducts { get; set; }
        public DbSet<IssueProduct> IssueProducts { get; set; } 

    }
}
