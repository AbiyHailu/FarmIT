using System; 
using System.ComponentModel.DataAnnotations; 

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
    }
}
