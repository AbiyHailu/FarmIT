using Microsoft.EntityFrameworkCore;
using Models;

namespace Concrete
{
    public class FarmItContext : DbContext
    {   
        public FarmItContext(DbContextOptions options) : base(options)
        {  } 
         
        public DbSet<Subscription> Subscriptions { get; set; }
        public DbSet<Plan> Plans { get; set; }
        public DbSet<Company> Companys { get; set; }
    }
}
