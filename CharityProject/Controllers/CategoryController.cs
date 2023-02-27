using Entities;
using Services;
using Microsoft.AspNetCore.Mvc;
using DTO;
using AutoMapper;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CharityProject.Controllers
{
   
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService _ICategoryService;
        IMapper _mapper;
        public CategoryController(ICategoryService categoryService,IMapper mapper)
        {
            _ICategoryService = categoryService;
            _mapper = mapper;
        }
       // GET: api/<CategoryController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CategoryDTO>>> Get()
        {
            IEnumerable<Category> categories = await _ICategoryService.getAllCategories();
            IEnumerable<CategoryDTO> newCategoryDTO = _mapper.Map<List<CategoryDTO>>(categories);

            if (newCategoryDTO != null)
                return Ok(newCategoryDTO);
            else return StatusCode(204);
        }

       //GET api/<CategoryController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // GET api/<CategoryController>/filterDetails
        [HttpGet("GetFilter")]
        public async Task<ActionResult<Category>> GetFilter([FromQuery] int?[] categoryIds, [FromQuery] string? name = null)
        {
            IEnumerable<Category> product = await _ICategoryService.getCategoryByFilter(categoryIds, name);
            return Ok(product);
        }

        // POST api/<CategoryController>
        [HttpPost]
        public async Task <ActionResult<CategoryDTO>> Post([FromBody] CategoryDTO category)
        {
            Category category1 = _mapper.Map<Category>(category);
           
            Category newCategory= await _ICategoryService.addCategory(category1);
           
            CategoryDTO newCategoryDTO = _mapper.Map<CategoryDTO>(newCategory);
         
            if (newCategoryDTO != null)
                return newCategoryDTO;
            else return Ok(newCategoryDTO);
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
