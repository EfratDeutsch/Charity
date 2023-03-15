using Entities;

namespace Services
{
    public interface ICityService
    {
        Task<IEnumerable<City>> getAllCities();
        //Task<IEnumerable<Charity>> GetCityById(int cityId);
    }
}