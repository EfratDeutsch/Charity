using Entities;

namespace Services
{
    public interface ICharityService
    {
        Task<Charity> addCharity(Charity charity);
        Task<IEnumerable<Charity>> GetCharityByCategory(int categoryId);
        Task updateCharity(int id, Charity charity);
    }
}