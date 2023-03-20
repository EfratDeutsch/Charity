using Microsoft.AspNetCore.Mvc;
using Services;
using Entities;
using DTO;
using AutoMapper;

namespace CharityProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly IUserService _IUserService;
        private readonly IMapper _mapper;
        public UserController(IUserService UserService, IMapper mapper)
        {
            _IUserService = UserService;
            _mapper = mapper;
        }

        // GET: api/<UserController>
        [HttpGet]
        public async Task <ActionResult<UserDTO>>  Get(string userName ,string password)
        {
            User user = await _IUserService.getUser(userName, password);
            UserDTO userDto = _mapper.Map<UserDTO>(user);
      

            if (userDto != null)
                return Ok(userDto);
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
        public async Task<ActionResult<UserDTO>> Post([FromBody] UserDTO user)
        {
            User newuser = _mapper.Map<UserDTO,User>(user);
            User myuser = await _IUserService.addUser(newuser);
            UserDTO newUserDTO = _mapper.Map<User,UserDTO>(myuser);
            if (newUserDTO != null)
                return newUserDTO;
            else return Ok(newUserDTO);

        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public  Task  Put(int id, [FromBody] UserDTO user)
        {
            User myuser = _mapper.Map<UserDTO,User>(user);
              return  _IUserService.updateUser(id,myuser);
           // UserDTO userdto = _mapper.Map<User,UserDTO>(newuser);

        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
