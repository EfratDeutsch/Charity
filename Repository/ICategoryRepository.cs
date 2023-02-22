using Entities;

namespace Repository
{
    public interface ICategoryRepository
    {
        Task<List<Category>> getAllCategories();
        Task<List<Category>> getCategoryByFilter(int?[] categoryIds, string? name);
        Task<Category> addCategory(Category category);
    }
}