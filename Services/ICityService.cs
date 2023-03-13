using Entities;

namespace Services
{
    public interface ICityService
    {
        Task<IEnumerable<City>> getAllCities();
    }
}