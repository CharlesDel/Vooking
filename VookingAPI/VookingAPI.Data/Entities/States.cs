using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VookingAPI.Data.Entities
{
    public class States
    {
        [Key]
        public int StateId { get; set; }

        public int CountryId { get; set; }

        public string StateName { get; set; }
    }
}
