using Microsoft.EntityFrameworkCore;
using Models.Store;

namespace Concrete
{
    public class ManagerContext : DbContext
    {
        public ManagerContext(DbContextOptions<ManagerContext> options) : base(options)
        { }

        public DbSet<Product> Products { get; set; }
        public DbSet<StoreBalance> StoreBalances { get; set; }
        public DbSet<RecieveProduct> RecieveProducts { get; set; }
        public DbSet<IssueProduct> IssueProducts { get; set; } 

    }
}
