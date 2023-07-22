using Entities;

namespace Repository
{
    public interface IUserRepository
    {
        Task<User> getUser(string userName , string password );
         Task<string> GetNameById(int id);
        Task<User> addUser(User user);
         Task updateUser( User user);
    }
}