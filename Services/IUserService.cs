using Repository;
using Entities;
namespace Services
{
    public interface IUserService
    {
        Task<User> addUser(User user);
        Task<User> getUser(string userName, string password);
        Task updateUser(int id, User user);
       
    }
}