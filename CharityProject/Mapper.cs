using AutoMapper;
using DTO;
using Entities;


namespace CharityProject
{
    public class Mapper : Profile
    {
        public Mapper(){
        
         CreateMap<User,UserDTO>().ReverseMap();  
       
        CreateMap<Category,CategoryDTO>().ReverseMap();
           
            CreateMap<Charity, CharityDTO>().ReverseMap();

            CreateMap<City,CityDTO>().ReverseMap(); 
       
        CreateMap<Status,StatusDTO>().ReverseMap();  
       
        CreateMap<Loan, LoanDTO>().ReverseMap();
        }

    }
}
