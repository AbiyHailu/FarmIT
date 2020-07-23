using AutoMapper;
using Models.AdminModels;
using ViewModels.AdminViewModels;

namespace API.Mappings
{
    public class ViewModelToModelMapper : Profile
    {
        public ViewModelToModelMapper()
        {
            CreateMap<SubscriptionViewModel, Subscription>()
             .ForMember(dest => dest.CompanyId, opt => opt.MapFrom(src => src.CompanyId))
             .ForMember(dest => dest.PlanId, opt => opt.MapFrom(src => src.PlanId))
             .ForMember(dest => dest.SubscriptionDate, opt => opt.MapFrom(src => src.SubscriptionDate))
             .ForMember(dest => dest.SubscriptionEndDate, opt => opt.MapFrom(src => src.SubscriptionEndDate)); 
        }
    }
}
