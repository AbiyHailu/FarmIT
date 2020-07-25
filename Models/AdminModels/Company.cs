using System; 
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models.AdminModels
{
    public class Company
    { 
        [Key] 
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Emailaddress { get; set; } 
        public string Password { get; set; } 
        public string Phone { get; set; }
        public string UserType { get; set; }
    }
}
