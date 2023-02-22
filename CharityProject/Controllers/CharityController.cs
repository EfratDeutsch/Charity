using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CharityProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CharityController : ControllerBase
    {
        // GET: api/<CharityController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "hello", "everybody" };
        }

        // GET api/<CharityController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
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
