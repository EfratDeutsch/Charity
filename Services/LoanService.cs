using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Repository;
using Entities;

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

        public async Task <IEnumerable<Loan>> getNotReturnedItem(int charityId)
        {
            IEnumerable<Loan> loans = await _loanRepository.getNotReturnedItem(charityId);
            if (loans != null)
                return loans;
            else return null;
        
        }
        public async Task<Loan> updateLoan(int id, Loan loan)
        {
           return await _loanRepository.updateLoan(id, loan);
        }
    }
}
