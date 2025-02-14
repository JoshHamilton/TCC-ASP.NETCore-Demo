using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using WebAppDemo.Data;
using WebAppDemo.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebAppDemo.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ApplicationDbContext _context;

        public IndexModel(ApplicationDbContext context)
        {
            _context = context;
            Classes = new List<Class>();
            MetaDescription = string.Empty;
        }

        public IList<Class> Classes { get; set; }
        public string MetaDescription { get; set; }

        public async Task OnGetAsync()
        {
            Classes = await _context.Classes.ToListAsync();
            MetaDescription = "View all classes at Tacoma College.";
        }
    }
}
