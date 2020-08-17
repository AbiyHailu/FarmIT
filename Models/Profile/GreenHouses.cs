using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models.Profile
{
    public class GreenHouses
    {
        public Guid GHID { get; set; }
        public string GHName { get; set; }
        [Column(TypeName = "decimal(10,2)")]
        public decimal Length  { get; set; }
        [Column(TypeName = "decimal(10,2)")]
        public decimal Width { get; set; }
    }
}
