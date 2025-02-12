using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using WebAppDemo.Data;
using WebAppDemo.Models;

namespace WebAppDemo.Pages.Classes
{
    public class IndexModel(ApplicationDbContext context) : PageModel
    {
        private readonly ApplicationDbContext _context = context;

        public IList<Class>? Classes { get; set; }

        public async Task OnGetAsync()
        {
            Classes = await _context.Classes.ToListAsync();
        }
    }
}
