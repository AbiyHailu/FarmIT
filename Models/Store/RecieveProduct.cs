using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Models.Store
{
    public class RecieveProduct
    {

        [Key]
        public Guid Id { get; set; }
        public Guid ProductId{ get; set; }
        public DateTime RecievedeDate { get; set; }
        public int Amount { get; set; }

    }
}
