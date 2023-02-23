using Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Repository
{
    public class LoanRepository : ILoanRepository
    {
        private readonly CharityContext _charityContext;
        public LoanRepository(CharityContext charityContext)
        {
            _charityContext = charityContext;
        }


        public async Task<Loan> addLoan(Loan loan)
        {
            await _charityContext.AddAsync(loan);
            await _charityContext.SaveChangesAsync();
            return loan;

        }

        public async  Task<List<Loan>> getNotReturnedItem()
        {
            var query = await _charityContext.Loans
                .Where(loan =>
                (loan.ReturnDate == null)).ToListAsync();

            List<Loan> list = query;
            return list;
        }

     //   var query = _charityContext.Categories.Where(category =>
     //   (name == null ? (true) : category.CategoryName.Contains(name))

     //&& ((categoryIds.Length == 0) ? (true) : (categoryIds.Contains(category.CategoryId))))
     //.OrderBy(Category => Category.CategoryId);
     //   Console.WriteLine(query.ToQueryString());
     //       List<Category> categories = await query.ToListAsync();
     //       return categories;





    }
}
