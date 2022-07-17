using Microsoft.EntityFrameworkCore;

namespace ABM_Fleet.Infrastructure
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Vehicle> Vehicles { get; set; }


    }
}
