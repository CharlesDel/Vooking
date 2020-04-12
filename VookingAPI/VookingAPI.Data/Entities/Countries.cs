using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VookingAPI.Data.Entities
{
    public class Countries
    {
        [Key]
        public int CountryId { get; set; }

        public string CountrySortName { get; set; }

        public string CountryName { get; set; }

        public int CountryPhoneCode { get; set; }
    }
}
