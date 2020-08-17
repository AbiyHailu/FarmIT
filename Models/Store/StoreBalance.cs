using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models.Store
{
    public class StoreBalance
    {

        [Key]
        public Guid ProductId { get; set; }
        public DateTime BalanceDate { get; set; }
        [Column(TypeName = "decimal(10,2)")]
        public decimal Amount { get; set; }
        public Product Products { get; set; }
    }
}
