using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
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
        public async Task<IEnumerable<Category>> getAllCategories()
        { 
       
            return await _ICategoryRepository.getAllCategories();
            
     
        }

        public async Task<IEnumerable<Category>> getCategoryByFilter(int?[] categoryIds, string? desc)
        {
            //List<Category> categories= await _ICategoryRepository.getCategoryByFilter(categoryIds, desc);
            //List<CategoryDTO> categoriesDTO = new();
            return await _ICategoryRepository.getCategoryByFilter(categoryIds,desc);

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
