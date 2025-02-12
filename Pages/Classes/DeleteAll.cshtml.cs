using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using WebAppDemo.Data;
using System.Threading.Tasks;

namespace WebAppDemo.Pages.Classes
{
    public class DeleteAllModel : PageModel
    {
        private readonly ApplicationDbContext _context;

        public DeleteAllModel(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> OnPostAsync()
        {
            _context.Classes.RemoveRange(_context.Classes);
            await _context.SaveChangesAsync();
            return RedirectToPage("./Index");
        }
    }
}
