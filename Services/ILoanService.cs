using Entities;

namespace Services
{
    public interface ILoanService
    {
        Task<Loan> addLoan(Loan loan);

        Task<IEnumerable<Loan>> getNotReturnedItem(int charityId);

        Task updateLoan(int id, Loan loan);
    }
}