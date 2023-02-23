using Entities;

namespace Repository
{
    public interface ILoanRepository
    {
        Task<Loan> addLoan(Loan loan);

        Task<List<Loan>> getNotReturnedItem();
    }
}