using System;

namespace ViewModels.ProtectionVM
{ 
    public class PestViewModel
    {
        public Guid Id { get; set; }
        public Guid CompanyId { get; set; }
        public string Description { get; set; }
        public string Name { get; set; }
        public string Syptoms { get; set; }
        public string Image { get; set; }
    }
}
