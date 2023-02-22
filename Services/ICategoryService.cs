using Entities;

namespace Services
{
    public interface ICategoryService
    {
        Task<List<Category>> getAllCategories();

        Task<List<Category>> getCategoryByFilter(int?[] categoryIds, string? desc);

        Task<Category> addCategory(Category category);
    }
}