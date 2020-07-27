using Microsoft.EntityFrameworkCore;
using Models.AdminModels;

namespace Concrete
{
    public class AdminContext : DbContext
    {   
        public AdminContext(DbContextOptions<AdminContext> options) : base(options)
        {  } 
         
        public DbSet<Subscription> Subscriptions { get; set; }
        public DbSet<Plan> Plans { get; set; }
        public DbSet<Company> Companys { get; set; }
    }
}
