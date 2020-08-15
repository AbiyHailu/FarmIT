using System;

namespace ViewModels.StoreViewModels
{
    public class IssuedProductViewModel
    {
        public Guid Id { get; set; }
        public Guid ProductId { get; set; }
        public DateTime IssueddeDate { get; set; }
        public int Amount { get; set; }
        public Guid DepartmentId { get; set; }
        public string Reason { get; set; }
    }
}
