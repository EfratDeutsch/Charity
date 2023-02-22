using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
using Microsoft.EntityFrameworkCore;

namespace Repository
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly CharityContext _charityContext;
        public CategoryRepository(CharityContext charityContext)
        {
            _charityContext = charityContext;
        }

        public async Task<List<Category>> getAllCategories()
        {
            var categories = (from category in _charityContext.Categories
                              select category).ToList<Category>();
            return categories;
        }

        public async Task<List<Category>> getCategoryByFilter(int?[] categoryIds,string? name)
        {
            var query = _charityContext.Categories.Where(category =>
                (name == null ? (true) : category.CategoryName.Contains(name))

                && ((categoryIds.Length == 0) ? (true) : (categoryIds.Contains(category.CategoryId))))
                .OrderBy(Category => Category.CategoryId);
            Console.WriteLine(query.ToQueryString());
            List<Category> categories = await query.ToListAsync();
            return categories;



        }

        public async Task<Category> addCategory(Category category)
        {
            await _charityContext.AddAsync(category);
            await _charityContext.SaveChangesAsync();
            return category;
        }
    }
}