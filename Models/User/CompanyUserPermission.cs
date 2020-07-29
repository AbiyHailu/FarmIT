using Models.AdminModels;
using System;

namespace Models.ManagerModels
{
    public  class CompanyUserPermission
    {
        public Guid Id { get; set; }
        public Guid CompanyId { get; set; }
        public Guid UserId { get; set; }
        public Guid PlanId { get; set; } 
        public Company Company { get; set; }
        public User User { get; set; }
        public Plan Plan { get; set; }
    }
}
