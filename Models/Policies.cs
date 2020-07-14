using Microsoft.AspNetCore.Authorization;

namespace Models
{
    public static class Policies
    {
        public const string Admin = "Admin";// this is me. used to manage subscription
        public const string Manager = "Manager";
        public const string User = "User";
        public static AuthorizationPolicy AdminPolicy()
        {
            return new AuthorizationPolicyBuilder().RequireAuthenticatedUser().RequireRole(Admin).Build();
        }
        public static AuthorizationPolicy UserPolicy()
        {
            return new AuthorizationPolicyBuilder().RequireAuthenticatedUser().RequireRole(User).Build();
        }
    }
}
