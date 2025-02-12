using Microsoft.EntityFrameworkCore;
using WebAppDemo.Models;

namespace WebAppDemo.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Class> Classes { get; set; }
    }
}