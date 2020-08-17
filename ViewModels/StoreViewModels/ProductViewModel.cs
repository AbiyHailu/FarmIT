using System;

namespace ViewModels.StoreViewModels
{
    public class ProductViewModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public DateTime ExpirationDate { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string Metrics { get; set; }
    }
}
