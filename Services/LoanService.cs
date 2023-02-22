using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;

namespace Services
{
    public class LoanService
    {
        private readonly ILoanRepository _loanRepository;
        public LoanService(ILoanRepository loanRepository)
        {
            _loanRepository = loanRepository;
        }
       public async Task<Loan> addLoan(Loan loan)
        {

          Loan newLoan=await _loanRepository.addLone(loan);
            if (newLoan != null)
                return newLoan;
            else return null;
        }
    }
}
