using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using WebAppDemo.Data;
using System.Globalization;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace WebAppDemo.Pages.Classes
{
    public class ExportModel : PageModel
    {
        private readonly ApplicationDbContext _context;

        public ExportModel(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> OnGetAsync()
        {
            var classes = await _context.Classes.ToListAsync();

            var builder = new StringBuilder();
            builder.AppendLine("ClassName,ClassDescription,Units,Quarter");

            foreach (var classItem in classes)
            {
                builder.AppendLine($"{classItem.ClassName},{classItem.ClassDescription},{classItem.Units.ToString(CultureInfo.InvariantCulture)},{classItem.Quarter}");
            }

            return File(Encoding.UTF8.GetBytes(builder.ToString()), "text/csv", "classes.csv");
        }
    }
}
