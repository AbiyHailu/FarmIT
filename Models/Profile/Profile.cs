using System.ComponentModel.DataAnnotations.Schema;

namespace Models.Profile
{
    public class Profile
    {
        public string FarmName { get; set; }
        public string Location { get; set; }
        public  string Latittude { get; set; }
        public string  Longitude { get; set; }
        [Column(TypeName = "decimal(10,2)")]
        public decimal TotalSize { get; set; }
        [Column(TypeName = "decimal(10,2)")]
        public decimal ProductionAreaSize { get; set; } 
    }
}
