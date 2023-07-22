using System;
using System.Collections.Generic;

namespace Entities
{
    public partial class Status
    {
        public Status()
        {
            Loans = new HashSet<Loan>();
        }

        public int StatusId { get; set; }
        public string StatusName { get; set; } = null!;

        public virtual ICollection<Loan> Loans { get; set; }
    }
}
