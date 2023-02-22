using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;

namespace Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly CharityContext _charityContext;
        public UserRepository(CharityContext charityContext)
        {
            _charityContext = charityContext;
        }
        public async Task<User> getUser(string userName,string password)
        {
            var list = (from user in _charityContext.Users
                        where user.UserName == userName && user.Password == password
                        select user).ToArray<User>();
            return list.FirstOrDefault();

        }

        public async Task<User> addUser(User user)
        {
            await _charityContext.AddAsync(user);
            await _charityContext.SaveChangesAsync();
            return user;
        }
       
        public  void updateUser(int id, User user)
        {
            _charityContext.Update(user);
             _charityContext.SaveChangesAsync();

        }


    }
}
