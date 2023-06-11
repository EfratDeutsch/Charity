using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using Entities;

using Microsoft.EntityFrameworkCore;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace Repository
{
    public class CharityRepository : ICharityRepository
    {
        private readonly CharityContext _charityContext;
        public CharityRepository(CharityContext charityContext)
        {
            _charityContext = charityContext;
        }
        public async Task<IEnumerable<Charity>> GetAllCharities()
        {
            IEnumerable<Charity> charities = await _charityContext.Charities.ToListAsync();
            return charities;
        }
        public async Task<IEnumerable<Charity>> GetFilter(int? categoryId, int? cityId)
        {
            //if (categoryId != null && cityId != null)
            //{

            //    var query = _charityContext.Charities.Where(charity =>
            //        (charity.CategoryId == categoryId)
            //    );

            //    var query2 = _charityContext.Cities.Where(city =>
            //        (city.CityId == cityId)
            //    );

            //    IEnumerable<Charity> charities1 = await query.ToListAsync();
            //    IEnumerable<Charity> charities2 = await query.ToListAsync();
            //    return query;

            //}
            //else 

            //if (categoryId != null)
            //{

            //}
            //}
            //else if (cityId != null)
            //{
            //    var query2 = _charityContext.Cities.Where(city =>
            //    (city.CityId == cityId)
            //                   );
            //    IEnumerable<Charity> charities2 = await query2.ToListAsync();
            //    return charities2;
            //}



            //var query = _charityContext.Charities.Where(charity =>
            //     (charity.CategoryId == categoryId)
            // );
            //IEnumerable<Charity> charities1 = await query.ToListAsync();
            //return charities1;


            var charities = _charityContext.Charities
             .Where(c => c.CategoryId == categoryId && c.CityId == cityId);
            IEnumerable<Charity> all = await charities.ToListAsync();
            return all;

        }
        
          public async Task<IEnumerable<Charity>> GetCharityByCategory(int categoryId)
        {

            var query = _charityContext.Charities.Where(charity =>
                    (charity.CategoryId == categoryId)
                );

            IEnumerable<Charity> charities = await query.ToListAsync();
            return charities;

        }
     
        public async Task<IEnumerable<Charity>> GetCharityByUser(int userId)
        {

            var query = _charityContext.Charities.Where(charity =>
                    (charity.UserId == userId)
                );

            IEnumerable<Charity> charities = await query.ToListAsync();
            return charities;

        }
        public async Task<Charity> addCharity(Charity charity)
        {
            await _charityContext.AddAsync(charity);
            await _charityContext.SaveChangesAsync();
            return charity;
        }


        public async Task updateCharity(int id, Charity charity)
        {

            _charityContext.Update(charity);
            await _charityContext.SaveChangesAsync();

        }
        public async Task DeleteCharity(int id)
        {
            var charity = await _charityContext.Charities.FindAsync(id);
            if (charity != null)
            {
                // Find all loans associated with the charity
                var loansToDelete = await _charityContext.Loans.Where(l => l.CharityId == id).ToListAsync();

                // Remove all loans associated with the charity
                _charityContext.Loans.RemoveRange(loansToDelete);

                // Remove the charity
                _charityContext.Charities.Remove(charity);

                // Save changes to the database
                await _charityContext.SaveChangesAsync();
            }
        }

    }
}
