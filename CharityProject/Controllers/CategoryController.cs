using Entities;
using Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CharityProject.Controllers
{
   
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService _ICategoryService;
        public CategoryController(ICategoryService categoryService)
        {
            _ICategoryService = categoryService;
        }
        // GET: api/<CategoryController>
        [HttpGet]
        public async Task <ActionResult<List<Category>>> Get()
        {
            List<Category> categories = await _ICategoryService.getAllCategories();
            if (categories != null)
                return Ok(categories);
            else return StatusCode(204);
        }

        // GET api/<CategoryController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // GET api/<CategoryController>/filterDetails
        [HttpGet("GetFilter")]
        public async Task<ActionResult<Category>> GetFilter([FromQuery] int?[] categoryIds, [FromQuery] string? name = null)
        {
            List<Category> product = await _ICategoryService.getCategoryByFilter(categoryIds, name);
            return Ok(product);
        }

        // POST api/<CategoryController>
        [HttpPost]
        public async Task <ActionResult<Category>> Post([FromBody] Category category)
        {
            Category newCategory= await _ICategoryService.addCategory(category);
            if (newCategory != null)
                return newCategory;
            else return Ok(newCategory);
        }

        // PUT api/<CategoryController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CategoryController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
