using Entities;

namespace Services
{
    public interface ILoanService
    {
        Task<Loan> addLoan(Loan loan);

        Task<List<Loan>> getNotReturnedItem();
    }
}