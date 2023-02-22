using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
using Repository;

namespace Services
{
    public class CategoryService : ICategoryService
    {
        private readonly ICategoryRepository _ICategoryRepository;
        public CategoryService(ICategoryRepository CategoryRepository)
        {
            _ICategoryRepository = CategoryRepository;

        }
        public async Task<List<Category>> getAllCategories()
        {
            return await _ICategoryRepository.getAllCategories();
        }

        public async Task<List<Category>> getCategoryByFilter(int?[] categoryIds, string? desc)
        {
            return await _ICategoryRepository.getCategoryByFilter( categoryIds,desc);

        }

        public async Task <Category> addCategory(Category category)
        {
            Category newCategory= await _ICategoryRepository.addCategory(category);
            if (newCategory != null)
                return newCategory;
            else return null;
        }
    }
}
