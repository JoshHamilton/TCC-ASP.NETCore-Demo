using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using WebAppDemo.Data;
using WebAppDemo.Models;

namespace WebAppDemo.Pages.Classes
{
    public class DeleteModel : PageModel
    {
        private readonly ApplicationDbContext _context;

        public DeleteModel(ApplicationDbContext context)
        {
            _context = context;
            Class = new Class(); // Initialize the Class property with a default value
        }

        [BindProperty]
        public Class? Class { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Class = await _context.Classes.FindAsync(id);

            if (Class == null)
            {
                return NotFound();
            }
            return Page();
        }

        public async Task<IActionResult> OnPostAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Class = await _context.Classes.FindAsync(id);

            if (Class != null)
            {
                _context.Classes.Remove(Class);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }
    }
}