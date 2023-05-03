using Entities;


namespace Repository
{
    public interface ICharityRepository
    {
        Task<IEnumerable<Charity>> GetCharityByCategory(int categoryId);
        Task<IEnumerable<Charity>> GetCharityByUser(int userId);
        Task<Charity> addCharity(Charity charity);
        Task updateCharity(int id, Charity charity);
    }
}