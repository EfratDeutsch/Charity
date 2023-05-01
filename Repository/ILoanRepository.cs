﻿using Entities;

namespace Repository
{
    public interface ILoanRepository
    {
        Task<Loan> addLoan(Loan loan);

        Task<IEnumerable<Loan>> getNotReturnedItem(int charityId);

        Task updateLoan(int id, Loan loan);
    }
}