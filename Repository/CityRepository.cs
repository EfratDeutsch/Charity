using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
using Microsoft.EntityFrameworkCore;

namespace Repository
{
    public class CityRepository : ICityRepository
    {
        private readonly CharityContext _charityContext;
        public CityRepository(CharityContext CharityContext)
        {
            _charityContext = CharityContext;
        }

        public async Task<IEnumerable<City>> getAllCities()
        {
            IEnumerable<City> cities = await _charityContext.Cities.ToListAsync();
            if (cities != null)
                return (IEnumerable<City>)cities;
            else return null;

        }
        //public async Task<IEnumerable<City>> GetCityById(int cityId)
        //{

        //    var query = _charityContext.Cities.Where(city =>
        //            (city.CityId == cityId)
        //        );

        //    IEnumerable<City> cities = await query.ToListAsync();
        //    return cities;

        //}

    }
}
