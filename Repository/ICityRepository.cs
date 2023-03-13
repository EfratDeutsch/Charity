using Entities;

namespace Repository
{
    public interface ICityRepository
    {
        Task<IEnumerable<City>> getAllCities();
    }
}