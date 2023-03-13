using Microsoft.AspNetCore.Mvc;
using Entities;
using Services;
using DTO;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CharityProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly ICityService _ICityService;
        public CityController(ICityService ICityService)
        {
            _ICityService = ICityService;
        }

        // GET: api/<CityController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<City>>> Get()
        {
            IEnumerable<City> cities = await _ICityService.getAllCities();
            if (cities != null)
                return cities.ToList();
            else return Ok(cities);

        }

        // GET api/<CityController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

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
