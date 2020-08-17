using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Profile
{
    public class OpenField
    {
        public Guid OpenFieldID { get; set; }
        public string Name { get; set; }
        public decimal Length { get; set; }
        public decimal Width { get; set; }
    }
}
