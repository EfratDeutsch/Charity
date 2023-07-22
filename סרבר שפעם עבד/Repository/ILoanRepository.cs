using Entities;


namespace Repository
{
    public interface ILoanRepository
    {
        Task<Loan> addLoan(Loan loan);

        Task<IEnumerable<Loan>> getNotReturnedItem(int charityId);

        Task<Loan> updateLoan(int id, Loan loan);
        Task<IEnumerable<Loan>> getLoansByFilter(int charityId, string? name, string? email, string? borrowName);
    }
}