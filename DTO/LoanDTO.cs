using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class LoanDTO
    {
           
     
        public int CharityId { get; set; }
        public DateTime? LoanDate { get; set; }
        public DateTime? ReturnDate { get; set; }

        public string BorrowerName { get; set; } = null!;
        public string BorrowerPhone { get; set; } = null!;
        public string? BorrowerEmail { get; set; }
        public bool? IsReturned { get; set; }
        public int LoanId { get; set; }

        public int StatusId { get; set; }
        public string ItemName { get; set; } = null!;
    }
}
