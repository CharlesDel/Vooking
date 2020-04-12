﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VookingAPI.Data.Entities
{
    public class Cities
    {
        [Key]
        public int CityId { get; set; }

        public int StateId { get; set; }

        public string CityName { get; set; }

    }
}
