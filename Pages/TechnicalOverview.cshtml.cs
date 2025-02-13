using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebAppDemo.Pages;

public class TechnicalOverviewModel : PageModel
{
    private readonly ILogger<TechnicalOverviewModel> _logger;

    public TechnicalOverviewModel(ILogger<TechnicalOverviewModel> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {
    }
}
