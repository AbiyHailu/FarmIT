using System; 
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models.Store
{
    public class Product
    { 
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }//make it enum 
        public DateTime ExpirationDate  { get; set; }
        public string Description { get; set; }

        [Column(TypeName = "decimal(10,2)")]
        public decimal Price { get; set; } 
        public string Metrics { get; set; }
    }
}
