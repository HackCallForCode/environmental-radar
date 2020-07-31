using System;

namespace environmental_radar.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Telephone { get; set; }
        public long CPF { get; set; }
        public DateTime BirthDate { get; set; }

    }
}