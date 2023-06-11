using Entities;


namespace Services
{
    public interface ICharityService
    {
        Task<Charity> addCharity(Charity charity);
        Task<IEnumerable<Charity>> GetAllCharities();
        Task<IEnumerable<Charity>> GetFilter(int? categoryId, int? cityId);
        Task<IEnumerable<Charity>> GetCharityByCategory(int categoryId);
        Task<IEnumerable<Charity>> GetCharityByUser(int userId);
        Task updateCharity(int id, Charity charity);
        Task DeleteCharity(int id);
    }
}