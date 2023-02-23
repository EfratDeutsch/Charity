using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Entities
{
    public partial class Loan
    {
        public int LoanId { get; set; }
        public int CharityId { get; set; }
        public DateTime? LoanDate { get; set; }
        public DateTime? ReturnDate { get; set; }
    
        public int StatusId { get; set; }
        public string ItemName { get; set; } = null!;
        //[JsonIgnore]
        //public virtual Charity Charity { get; set; } = null!;
        //[JsonIgnore]
        //public virtual Status Status { get; set; } = null!;
    }
}
