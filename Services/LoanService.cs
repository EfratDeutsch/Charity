using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
using Repository;

namespace Services
{
    public class LoanService : ILoanService
    {
        private readonly ILoanRepository _loanRepository;
        public LoanService(ILoanRepository loanRepository)
        {
            _loanRepository = loanRepository;
        }
        public async Task<Loan> addLoan(Loan loan)
        {

            Loan newLoan = await _loanRepository.addLoan(loan);
            if (newLoan != null)
                return newLoan;
            else return null;
        }

        public async Task <List<Loan>> getNotReturnedItem()
        {
            List<Loan> loans = await _loanRepository.getNotReturnedItem();
            if (loans != null)
                return loans;
            else return null;
            
        }
    }
}
