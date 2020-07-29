using Microsoft.EntityFrameworkCore;
using Models.AdminModels;
using Models.ManagerModels;
using Models.Store;

namespace Concrete
{
    public class AdminContext : DbContext
    {   
        public AdminContext(DbContextOptions<AdminContext> options) : base(options)
        {  } 
         
        public DbSet<Subscription> Subscriptions { get; set; }
        public DbSet<Plan> Plans { get; set; }
        public DbSet<Company> Companys { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<CompanyUserPermission> CompanyUserPermissions { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<StoreBalance> StoreBalances { get; set; }
        public DbSet<RecieveProduct> RecieveProducts { get; set; }
        public DbSet<IssueProduct> IssueProducts { get; set; }
    }
}
