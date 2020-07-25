using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Models.Store
{
    public class IssueProduct
    {

        [Key]
        public Guid Id { get; set; }
        public Guid ProductId { get; set; }
        public DateTime IssueddeDate { get; set; }
        public int Amount { get; set; }
        public  Guid DepartmentId { get; set; }
        public string  Reason { get; set; }
    }
}
