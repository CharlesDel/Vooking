using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VookingAPI.Data.Entities;

namespace VookingAPI.Data
{
    public class VookingAPIContext : DbContext
    {
        public DbSet<Countries> Countries { get; set; }
        public DbSet<States> States { get; set; }
        public DbSet<Cities> Cities { get; set; }


    }
}
