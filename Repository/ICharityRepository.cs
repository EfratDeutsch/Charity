using Entities;

namespace Repository
{
    public interface ICharityRepository
    {
        Task<IEnumerable<Charity>> GetCharityByCategory(int categoryId);
    }
}