using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models.Profile
{
    public class OpenField
    {
        public Guid OpenFieldID { get; set; }
        public string Name { get; set; }
        [Column(TypeName = "decimal(10,2)")]
        public decimal Length { get; set; }
        [Column(TypeName = "decimal(10,2)")]
        public decimal Width { get; set; }
    }
}
