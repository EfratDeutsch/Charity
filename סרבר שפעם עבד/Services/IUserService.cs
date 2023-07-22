using Repository;
using Entities;


namespace Services
{
    public interface IUserService
    {
        Task<User> addUser(User user);
        Task<User> getUser(string userName, string password);
        Task <string> GetNameById(int id);
        Task updateUser(int id, User user);
       
    }
}