using Interface;
using Microsoft.Extensions.Configuration;

namespace Concrete
{
   public class PlanConcrete:IPlan
    {
        private readonly IConfiguration configuration;
        private readonly FarmItContext context;
        public PlanConcrete(FarmItContext context, IConfiguration configuration)
        {
            this.context = context;
            this.configuration = configuration;

        }
    }
}
