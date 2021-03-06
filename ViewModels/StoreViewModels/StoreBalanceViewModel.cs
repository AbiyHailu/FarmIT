﻿using System;

namespace ViewModels.StoreViewModels
{
    public class StoreBalanceViewModel
    {
        public Guid ProductId { get; set; }
        public DateTime BalanceDate { get; set; }
        public decimal Amount { get; set; }
        public string ProductName { get; set; }
    }
}
