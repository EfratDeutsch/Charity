using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
using Repository;

namespace Services
{
    public class CityService : ICityService
    {
        private readonly ICityRepository _ICityRepository;
        public CityService(ICityRepository ICityRepository)
        {
            _ICityRepository = ICityRepository;
        }
        public async Task<IEnumerable<City>> getAllCities()
        {
            IEnumerable<City> cities = await _ICityRepository.getAllCities();
            if (cities != null)
                return cities;
            else return null;

        }


    }
}
