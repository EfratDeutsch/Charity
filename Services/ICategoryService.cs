using Entities;


namespace Services
{
    public interface ICategoryService
    {
        Task<IEnumerable<Category>> getAllCategories();

        Task<IEnumerable<Category>> getCategoryByFilter(int?[] categoryIds, string? desc);

        Task<Category> addCategory(Category category);
    }
}