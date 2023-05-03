using Entities;

namespace Repository
{
    public interface IUserRepository
    {
        Task<User> getUser(string userName , string password );

        Task<User> addUser(User user);
         Task updateUser(int id, User user);
    }
}