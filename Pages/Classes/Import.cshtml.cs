using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using WebAppDemo.Data;
using WebAppDemo.Models;
using System.Globalization;
using System.IO;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace WebAppDemo.Pages.Classes
{
    public class ImportModel : PageModel
    {
        private readonly ApplicationDbContext _context;

        public ImportModel(ApplicationDbContext context)
        {
            _context = context;
        }

        [BindProperty, Required]
        public IFormFile? Upload { get; set; }

        public void OnGet()
        {
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            if (Upload == null || Upload.Length == 0)
            {
                ModelState.AddModelError("Upload", "Please select a CSV file to upload.");
                return Page();
            }

            using (var reader = new StreamReader(Upload.OpenReadStream()))
            {
                bool isFirstRow = true;
                while (!reader.EndOfStream)
                {
                    var line = await reader.ReadLineAsync();
                    if (isFirstRow)
                    {
                        isFirstRow = false;
                        continue; // Skip the header row
                    }

                    var values = line?.Split(',');
                    if (values == null || values.Length < 4) continue;

                    if (!decimal.TryParse(values[2], NumberStyles.Any, CultureInfo.InvariantCulture, out var units))
                    {
                        ModelState.AddModelError("Upload", $"Invalid units value '{values[2]}' in the CSV file.");
                        return Page();
                    }

                    var newClass = new Class
                    {
                        ClassName = values[0],
                        ClassDescription = values[1],
                        Units = units,
                        Quarter = values[3]
                    };

                    _context.Classes.Add(newClass);
                }
                await _context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }
    }
}
