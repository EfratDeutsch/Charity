using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;

using Microsoft.EntityFrameworkCore;

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
            var user = await _charityContext.Users
                .Where(u => u.UserName == userName
                && u.Password == password)
                .Include(u => u.Charities)               
                .FirstOrDefaultAsync();
            return user;
                
            //var list = (from user in _charityContext.Users
            //            where user.UserName == userName && user.Password == password
            //            select user).ToArray<User>();
            //return list.FirstOrDefault();

        }
        public async Task<string> GetNameById(int id)
        {
            User user = await _charityContext.Users
                .Where(u => u.UserId == id).FirstOrDefaultAsync();
            string firstName = user.FirstName;
            string lastName = user.LastName;

            string name = firstName +" " +lastName;
            if (name != null)
                return name;
            return null;
        }

        public async Task<User> addUser(User user)
        {
            await _charityContext.AddAsync(user);
            await _charityContext.SaveChangesAsync();
            return user;
        }
       
        public  async Task updateUser(User user)
        {
            

            _charityContext.Update(user);
            await _charityContext.SaveChangesAsync();


            //try
            //{
            //    User newUser = await _charityContext.Users.FindAsync(id);
            //    if (newUser != null)
            //    {

            //        newUser.UserName = user.UserName;
            //        newUser.Password = user.Password;
            //        newUser.FirstName = user.FirstName;
            //        newUser.LastName = user.LastName;

            //        _charityContext.Users.Update(newUser);
            //        await _charityContext.SaveChangesAsync();

            //    }
            //    return ;
            //}
            //catch (Exception ex)
            //{
            //    throw new Exception("Error in Update Loan" + ex.Message);
            //}




        }


    }
}
