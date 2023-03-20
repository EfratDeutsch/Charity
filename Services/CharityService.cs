using Entities;
using Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services
{

    public class CharityService : ICharityService
    {
        private readonly ICharityRepository _charityRepository;

        public CharityService(ICharityRepository charityRepository)

        {
            _charityRepository = charityRepository;

        }

        public async Task<IEnumerable<Charity>> GetCharityByCategory(int categoryId)
        {
            IEnumerable<Charity> list = await _charityRepository.GetCharityByCategory(categoryId);
            if (list != null)
                return list;
            else return null;
        }


        //public async Task<IEnumerable<Charity>> GetCharityByUser(int userId)
        //{
        //    IEnumerable<Charity> list = await _charityRepository.GetCharityByUser(userId);
        //    if (list != null)
        //        return list;
        //    else return null;
        //}
        public async Task<Charity> addCharity(Charity charity)
        {
            Charity newCharity = await _charityRepository.addCharity(charity);
            if (newCharity != null)
                return charity;
            else return null;
        }

        public async Task updateCharity(int id, Charity charity)
        {
            _charityRepository.updateCharity(id, charity);

        }
    }
}
