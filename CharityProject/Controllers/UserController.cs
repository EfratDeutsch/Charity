using Microsoft.AspNetCore.Mvc;
using Services;
using Entities;


namespace CharityProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly IUserService _IUserService;
        public UserController(IUserService UserService)
        {
            _IUserService = UserService;
        }

        // GET: api/<UserController>
        [HttpGet]
        public async Task <ActionResult<User>>  Get(  string userName ,string password)
        {
            User user = await _IUserService.getUser(userName, password);
            if (user != null)
                return Ok(user);
            else return StatusCode(204);


        }

    /*    // GET api/<UserController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }
    */

        // POST api/<UserController>
        [HttpPost]
        public async Task<ActionResult<User>> Post([FromBody] User user)
        {
            user = await _IUserService.addUser(user);
            if (user != null)
                return user;
            else return Ok(user);

        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] User user)
        {
           _IUserService.updateUser(id, user);
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
