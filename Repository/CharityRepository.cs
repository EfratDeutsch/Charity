using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using Entities;
using Microsoft.EntityFrameworkCore;

namespace Repository
{
    public class CharityRepository : ICharityRepository
    {
        private readonly CharityContext _charityContext;
        public CharityRepository(CharityContext charityContext)
        {
            _charityContext = charityContext;
        }

        public async Task<IEnumerable<Charity>> GetCharityByCategory(int categoryId)
        {

            var query = _charityContext.Charities.Where(charity =>
                    (charity.CategoryId == categoryId)
                );

            IEnumerable<Charity> charities = await query.ToListAsync();
            return charities;

        }
        //public async Task<IEnumerable<Charity>> GetCharityByUser(int userId)
        //{

        //    var query = _charityContext.Charities.Where(charity =>
        //            (charity.UserId == userId)
        //        );

        //    IEnumerable<Charity> charities = await query.ToListAsync();
        //    return charities;

        //}
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

    }
}
