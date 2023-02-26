using Entities;

namespace Services
{
    public interface IUserService
    {
        Task<User> getUser(string userName, string password);
        Task<User> addUser(User user);
        Task updateUser(int id, User user);
    }
}