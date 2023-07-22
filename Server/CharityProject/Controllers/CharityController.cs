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
        public async Task < IEnumerable<CharityDTO>> Get()
        {
            IEnumerable<Charity> charity = await _charityService.GetAllCharities();
            IEnumerable<CharityDTO> newCharityDTO = _mapper.Map<IEnumerable<CharityDTO>>(charity);
            if (newCharityDTO != null)
                return newCharityDTO;
            return null;
        }
        // GET: api/<CharityController>
        [HttpGet("getFilter")]
        public async Task<IEnumerable<CharityDTO>> GetFilter(int? categoryId ,int? cityId)
        {
            IEnumerable<Charity> charities = await _charityService.GetFilter(categoryId, cityId);
            IEnumerable<CharityDTO> newCharityDTO = _mapper.Map<IEnumerable<CharityDTO>>(charities);
            if (newCharityDTO != null)
                return newCharityDTO;
            return null;

        }

        // GET api/<CharityController>/5
        [HttpGet("byCategory/{categoryId}")]
        public async Task<IEnumerable<CharityDTO>> GetCharityByCategory(int categoryId)
        {
           IEnumerable <Charity> charity= await  _charityService.GetCharityByCategory(categoryId);
           IEnumerable <CharityDTO> newCharityDTO = _mapper.Map<IEnumerable<CharityDTO>>(charity);
           

            if (newCharityDTO != null)
                return newCharityDTO;
            return null;

        }


  

        // GET api/<CharityController>/5
        [HttpGet("{userId}")]
   
        public async Task<IEnumerable<CharityDTO>> GetCharityByUser(int userId)
        {
            IEnumerable<Charity> charity = await _charityService.GetCharityByUser(userId);
            IEnumerable<CharityDTO> newCharityDTO = _mapper.Map<IEnumerable<CharityDTO>>(charity);


            if (newCharityDTO != null)
                return newCharityDTO;
            return null;

        }


        // POST api/<CharityController>
        [HttpPost]
        public async Task<ActionResult<CharityDTO>> Post([FromBody] CharityDTO charity)
        {
            Charity newCharity = _mapper.Map<CharityDTO, Charity>(charity);
            Charity myCharity = await _charityService.addCharity(newCharity);
            CharityDTO newCharityDTO = _mapper.Map<Charity, CharityDTO>(myCharity);
            /*if (newCharityDTO != null)
                return Ok(newCharityDTO);
            return NoContent() ;*/
            return newCharityDTO != null ? Ok(newCharityDTO) : NoContent();
        }



        // PUT api/<CharityController>/5
        [HttpPut("{id}")]
        public Task Put(int id, [FromBody] CharityDTO charity)
        {
            Charity myCharity = _mapper.Map<CharityDTO, Charity>(charity);
            return _charityService.updateCharity(id, myCharity);
        }


        // DELETE api/<LoanController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _charityService.DeleteCharity(id);
            return Ok("Charity deleted successfully");
        }
    }
}
