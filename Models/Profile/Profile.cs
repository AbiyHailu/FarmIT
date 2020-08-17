using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Profile
{
    public class Profile
    {
        public string FarmName { get; set; }
        public string Location { get; set; }
        public  string Latittude { get; set; }
        public string  Longitude { get; set; }
        public decimal TotalSize { get; set; }
        public decimal ProductionAreaSize { get; set; } 
    }
}
