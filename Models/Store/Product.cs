using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Models.Store
{
    public class Product
    {

        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public DateTime ExpirationDate  { get; set; }
        public string Description { get; set; }
    }
}
