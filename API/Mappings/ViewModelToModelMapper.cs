using AutoMapper;
using Models.AdminModels;
using Models.ManagerModels;
using Models.Protection;
using ViewModels.AdminViewModels;
using ViewModels.ProtectionVM;
using ViewModels.UserViewModels;

namespace API.Mappings
{
    public class ViewModelToModelMapper : Profile
    {
        public ViewModelToModelMapper()
        {
            CreateMap<SubscriptionViewModel, PlanSubscription>()
             .ForMember(dest => dest.CompanyId, opt => opt.MapFrom(src => src.CompanyId))
             .ForMember(dest => dest.PlanId, opt => opt.MapFrom(src => src.PlanId))
             .ForMember(dest => dest.SubscriptionDate, opt => opt.MapFrom(src => src.SubscriptionDate))
             .ForMember(dest => dest.SubscriptionEndDate, opt => opt.MapFrom(src => src.SubscriptionEndDate));

            CreateMap<UserViewModel, User>()
             .ForMember(dest => dest.Emailaddress, opt => opt.MapFrom(src => src.Emailaddress))
             .ForMember(dest => dest.FirstName, opt => opt.MapFrom(src => src.FirstName))
             .ForMember(dest => dest.LastName, opt => opt.MapFrom(src => src.LastName))
             .ForMember(dest => dest.Phone, opt => opt.MapFrom(src => src.Phone))
             .ForMember(dest => dest.Password, opt => opt.MapFrom(src => src.Password));

            CreateMap<UserListVM, User>()
                .ForMember(dest => dest.Emailaddress, opt => opt.MapFrom(src => src.Emailaddress))
                .ForMember(dest => dest.FirstName, opt => opt.MapFrom(src => src.FirstName))
                .ForMember(dest => dest.LastName, opt => opt.MapFrom(src => src.LastName))
                .ForMember(dest => dest.Phone, opt => opt.MapFrom(src => src.Phone));

            CreateMap<PestViewModel, Pest>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Name))
                .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.Description))
                .ForMember(dest => dest.Companyid, opt => opt.MapFrom(src => src.CompanyId))
                .ForMember(dest => dest.Syptoms, opt => opt.MapFrom(src => src.Syptoms))
                .ForMember(dest => dest.Image, opt => opt.MapFrom(src => src.Image));
        }
    }
}
