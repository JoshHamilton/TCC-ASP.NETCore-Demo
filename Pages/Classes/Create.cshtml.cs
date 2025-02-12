using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using WebAppDemo.Data;
using WebAppDemo.Models;

namespace WebAppDemo.Pages.Classes
{
    public class CreateModel : PageModel
    {
        private readonly ApplicationDbContext _context;

        public CreateModel(ApplicationDbContext context)
        {
            _context = context;
        }

        public IActionResult OnGet()
        {
            return Page();
        }

        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://aka.ms/RazorPagesCRUD.
        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            if (Class != null)
            {
                _context.Classes.Add(Class);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }

        public Class? Class { get; set; }
    }
}
