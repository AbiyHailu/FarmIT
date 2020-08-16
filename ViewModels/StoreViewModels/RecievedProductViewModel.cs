 using System; 

namespace ViewModels.StoreViewModels
{
    public class RecievedProductViewModel
    {
        public Guid Id { get; set; }
        public Guid ProductId { get; set; }
        public DateTime RecievedeDate { get; set; }
        public int Amount { get; set; }
        public string ProductName  { get; set; }
    }
}
