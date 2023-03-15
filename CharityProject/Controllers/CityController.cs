using Microsoft.AspNetCore.Mvc;
using Entities;
using Services;
using DTO;
using System.Collections.Generic;
using AutoMapper;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CharityProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly ICityService _ICityService;

        private readonly IMapper _mapper;
        public CityController(ICityService ICityService,IMapper mapper)
        {
            _ICityService = ICityService;
            _mapper = mapper;
        }

        // GET: api/<CityController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CityDTO>>> Get()
        {
            IEnumerable<City> cities = (List<City>)await _ICityService.getAllCities();
            IEnumerable<CityDTO> citiesDTO = _mapper.Map<List<CityDTO>>(cities);


            if (citiesDTO != null)
                return citiesDTO.ToList();
            else return Ok(citiesDTO);

        }
        

        // GET api/<CityController>/5
        [HttpGet("{cityid}")]
        //public async Task<IEnumerable<CityDTO>> GetCityById(int cityId)
        //{
        //    IEnumerable<City> city = await _ICityService.GetCityById(cityId);
        //    IEnumerable<CityDTO> newCityDTO = _mapper.Map<IEnumerable<CityDTO>>(city);

        //    if (newCityDTO != null)
        //        return newCityDTO;
        //    return null;

        //}


        // POST api/<CityController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<CityController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CityController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
