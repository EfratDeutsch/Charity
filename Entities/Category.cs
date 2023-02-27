using System;
using System.Collections.Generic;

namespace Entities
{
    public partial class Category
    {
        public Category()
        {
            Charities = new HashSet<Charity>();
        }

        public int CategoryId { get; set; }
        public string CategoryName { get; set; } = null!;
        public string ImageUrl { get; set; } = null!;

        public virtual ICollection<Charity> Charities { get; set; }
    }
}
