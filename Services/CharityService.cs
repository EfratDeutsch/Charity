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
    }
}
