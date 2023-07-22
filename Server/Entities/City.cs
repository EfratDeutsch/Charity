using System;
using System.Collections.Generic;

namespace Entities
{
    public partial class City
    {
        public City()
        {
            Charities = new HashSet<Charity>();
        }

        public int CityId { get; set; }
        public string CityName { get; set; } = null!;

        public virtual ICollection<Charity> Charities { get; set; }
    }
}
