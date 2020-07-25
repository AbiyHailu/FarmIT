using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Models.Store
{
    public class StoreBalance
    {

        [Key]
        public Guid ProductId { get; set; }
        public DateTime BalanceDate { get; set; }
        public int Amount { get; set; }
        public Product Products { get; set; }
    }
}
