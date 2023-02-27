using Entities;

namespace Repository
{
    public interface ICategoryRepository
    {
        Task<IEnumerable<Category>> getAllCategories();
        Task<IEnumerable<Category>> getCategoryByFilter(int?[] categoryIds, string? name);
        Task<Category> addCategory(Category category);
    }
}