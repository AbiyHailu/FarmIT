using Microsoft.EntityFrameworkCore;

namespace Context
{
    public class FarmItContext : DbContext
    {
        public FarmItContext(DbContextOptions options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<Order>()
            //    .ToTable("Orders");

           
        }
    }
}
