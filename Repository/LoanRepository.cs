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

        public async  Task<IEnumerable<Loan>> getNotReturnedItem(int charityId)
        {

            var list = _charityContext.Loans.Where(loan =>
                  (loan.CharityId == charityId) &&
                  (loan.ReturnDate == null));

            IEnumerable<Loan> query = await list.ToListAsync();
            return query;

        }


        public async Task<Loan> updateLoan(int id,Loan loan)
        {
            try
            {
                Loan newloan = await _charityContext.Loans.FindAsync(id);
                if (newloan != null)
                {
                    newloan.CharityId = loan.CharityId;
                    newloan.LoanDate = loan.LoanDate;
                    newloan.ReturnDate = loan.ReturnDate;
                    newloan.StatusId = loan.StatusId;
                    newloan.ItemName = loan.ItemName;
                    newloan.BorrowerName = loan.BorrowerName;
                    newloan.BorrowerPhone = loan.BorrowerPhone;
                    newloan.BorrowerEmail = loan.BorrowerEmail;
                    newloan.IsReturned = loan.IsReturned;
                    newloan.LoanId = loan.LoanId;
                    _charityContext.Loans.Update(newloan);
                    await _charityContext.SaveChangesAsync();

                }
                return newloan;
            }
            catch(Exception ex)
            {
                throw new Exception("Error in Update Loan" + ex.Message);
            }
        }


//           try
//            {
//                SeminarDetail seminar1 = await _dbContext.SeminarDetails.FindAsync(id);
//                if (seminar1 != null)
//                {
//                    seminar1.Title = seminar.Title;
//                    seminar1.Date = seminar.Date;
//                    seminar1.Place = seminar.Place;
//                    seminar1.Lectures = seminar.Lectures;
//                    seminar1.Crowed = seminar.Crowed;
//                    seminar1.Program = seminar.Program;
//                    _dbContext.SeminarDetails.Update(seminar1);
//                    await _dbContext.SaveChangesAsync();
//    }
//                return seminar1;
//            }
//            catch (Exception ex)
//{
//    throw new Exception("Error in Update Seminar" + ex.Message);
//}









       // _charityContext.Update(loan);
          //  _charityContext.SaveChangesAsync();

        //   var query = _charityContext.Categories.Where(category =>
        //   (name == null ? (true) : category.CategoryName.Contains(name))

        //&& ((categoryIds.Length == 0) ? (true) : (categoryIds.Contains(category.CategoryId))))
        //.OrderBy(Category => Category.CategoryId);
        //   Console.WriteLine(query.ToQueryString());
        //       List<Category> categories = await query.ToListAsync();
        //       return categories;





    }
}
