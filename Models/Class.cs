using System.ComponentModel.DataAnnotations;

namespace WebAppDemo.Models
{
    public class Class
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Class Name is required.")]
        public string ClassName { get; set; } = string.Empty;
        [Required(ErrorMessage = "Class Description is required.")]
        public string ClassDescription { get; set; } = string.Empty;
        [Range(0.1, double.MaxValue, ErrorMessage = "Units must be greater than 0.")]
        public decimal Units { get; set; }
        [Required(ErrorMessage = "Quarter is required.")]
        public string Quarter { get; set; } = string.Empty;
    }
}