using System; 
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models.Store
{
    public class RecieveProduct
    { 
        [Key]
        public Guid Id { get; set; }
        public Guid ProductId{ get; set; }
        public DateTime RecievedeDate { get; set; } 

        [Column(TypeName = "decimal(10,2)")]
        public decimal Amount { get; set; } 
    }
}
