using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class CharityDTO
    {
        public int CharityId { get; set; }
        public string CharityName { get; set; } = null!;
        public int CategoryId { get; set; }
        public int UserId { get; set; }
        public int CityId { get; set; }
        public string? Neighborhood { get; set; }
        public string? CharityDesc { get; set; }
        public string Phone { get; set; } = null!;
    }
}
