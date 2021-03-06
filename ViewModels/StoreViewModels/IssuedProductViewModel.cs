﻿using System;

namespace ViewModels.StoreViewModels
{
    public class IssuedProductViewModel
    {
        public Guid Id { get; set; }
        public Guid ProductId { get; set; }
        public DateTime IssueddeDate { get; set; }
        public decimal Amount { get; set; }
        public Guid DepartmentId { get; set; }
        public string Reason { get; set; }
        public string ProductName { get; set; }
    }
}
