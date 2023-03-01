using Microsoft.AspNetCore.Mvc;
using Entities;
using DTO;
using AutoMapper;
using Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CharityProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CharityController : ControllerBase
    {
        private readonly ICharityService _charityService;
        private IMapper _mapper;
        public CharityController(ICharityService charityService,IMapper mapper)
        {
            _charityService = charityService;
            _mapper = mapper;
        }
        // GET: api/<CharityController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<CharityController>/5
        [HttpGet("{categoryId}")]
        public async Task<IEnumerable<CharityDTO>> GetCharityByCategory(int categoryId)
        {
           IEnumerable <Charity> charity= await  _charityService.GetCharityByCategory(categoryId);
           IEnumerable <CharityDTO> newCharityDTO = _mapper.Map<IEnumerable<CharityDTO>>(charity);
           

            if (newCharityDTO != null)
                return newCharityDTO;
            return null;

        }

        // POST api/<CharityController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<CharityController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CharityController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
