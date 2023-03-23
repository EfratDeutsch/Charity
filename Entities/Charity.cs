using System;
using System.Collections.Generic;

namespace Entities
{
    public partial class Charity
    {
        public Charity()
        {
            Loans = new HashSet<Loan>();
        }

        public int CharityId { get; set; }
        public string CharityName { get; set; } = null!;
        public int CategoryId { get; set; }
        public int UserId { get; set; }
        public int CityId { get; set; }
        public string? Neighborhood { get; set; }
        public string? CharityDesc { get; set; }
        public string Phone { get; set; } = null!;
        
        public virtual Category Category { get; set; } = null!;
        public virtual City City { get; set; } = null!;
        public virtual User User { get; set; } = null!;
        public virtual ICollection<Loan> Loans { get; set; }
    }
}
