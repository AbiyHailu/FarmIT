using Models.AdminModels;

namespace Models.Protection
{
    public class Pest:BaseModel
    {
        public string Name { get; set; } 
        public string Syptoms { get; set; }
        public string Image { get; set; } 
        public Company Company { get; set; }
    } 
}
