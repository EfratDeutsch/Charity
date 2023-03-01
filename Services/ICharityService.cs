using Entities;

namespace Services
{
    public interface ICharityService
    {
        Task<IEnumerable<Charity>> GetCharityByCategory(int categoryId);
    }
}