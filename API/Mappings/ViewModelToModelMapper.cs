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

            CreateMap<ViewModels.UserViewModels.UserListVM, Models.ManagerModels.User>()
             .ForMember(dest => dest.Emailaddress, opt => opt.MapFrom(src => src.Emailaddress))
             .ForMember(dest => dest.FirstName, opt => opt.MapFrom(src => src.FirstName))
             .ForMember(dest => dest.LastName, opt => opt.MapFrom(src => src.LastName))
             .ForMember(dest => dest.Phone, opt => opt.MapFrom(src => src.Phone));
        }
    }
}
