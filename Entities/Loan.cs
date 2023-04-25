using System;
using System.Collections.Generic;

namespace Entities
{
    public partial class Loan
    {
        public int CharityId { get; set; }
        public DateTime? LoanDate { get; set; }
        public DateTime? ReturnDate { get; set; }
        public int StatusId { get; set; }
        public string ItemName { get; set; } = null!;
        public string BorrowerName { get; set; } = null!;
        public string BorrowerPhone { get; set; } = null!;
        public string? BorrowerEmail { get; set; }
        public int LoanId { get; set; }

        public virtual Charity Charity { get; set; } = null!;
        public virtual Status Status { get; set; } = null!;
    }
}
