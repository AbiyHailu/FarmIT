using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models.Store
{
    public class IssueProduct
    {

        [Key]
        public Guid Id { get; set; }
        public Guid ProductId { get; set; }
        public DateTime IssueddeDate { get; set; }
        [Column(TypeName = "decimal(10,2)")]
        public decimal Amount { get; set; }
        public  Guid DepartmentId { get; set; }
        public string  Reason { get; set; }
    }
}
