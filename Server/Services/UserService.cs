using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository;
using Entities;


namespace Services
{
    public class UserService : IUserService
    {

        private readonly IUserRepository _IUserRepository;

        public UserService(IUserRepository userRepository)
        {
            _IUserRepository = userRepository;
        }

        public async Task<User> getUser(string userName, string password)
        {
            User user = await _IUserRepository.getUser(userName, password);

            if (user != null)
                return user;
            else return null;
        }

        public async Task<string> GetNameById(int id)
        {
            string name = await _IUserRepository.GetNameById(id);
            if (name != null)
                return name;
            else return null;
        }

        public async Task<User> addUser(User user)
        {
            User newUser = await _IUserRepository.addUser(user);

            if (newUser != null)
                return user;
            else return null;
        }

        public async Task updateUser( User user)
        {
            _IUserRepository.updateUser(user);
        }
    }
}
