using Entities;


namespace Repository
{
    public interface ICharityRepository
    {
        Task<IEnumerable<Charity>> GetAllCharities();
        Task<IEnumerable<Charity>> GetFilter(int? categoryId, int? cityId);
        Task<IEnumerable<Charity>> GetCharityByCategory(int categoryId);
        Task<IEnumerable<Charity>> GetCharityByUser(int userId);
        Task<Charity> addCharity(Charity charity);
        Task updateCharity(int id, Charity charity);

        Task DeleteCharity(int id);
    }
}