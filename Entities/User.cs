using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Entities
{
    public partial class User
    {
        public User()
        {
            Charities = new HashSet<Charity>();
        }

        public int UserId { get; set; }
        public string UserName { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string? FirstName { get; set; }
        public string? LastName { get; set; }

        [JsonIgnore]
        public virtual ICollection<Charity> Charities { get; set; }
    }
}
