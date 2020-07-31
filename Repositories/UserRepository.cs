using System;
using System.Collections.Generic;
using System.Linq;
using environmental_radar.Models;

namespace environmental_radar.Repositories
{
    public static class UserRepository
    {
        public static User GetUser(string email, string password)
        {
            var users = new List<User>();

            users.Add(new User
            {
                Id = 1, 
                Name = "Danilo", 
                Email = "danilo@radar-ambiental.com", 
                Password = "123", 
                Telephone = "(11)98765-4321", 
                CPF = 12345678901, 
                BirthDate = Convert.ToDateTime("01/01/1988")
            });
            
            users.Add(new User
            {
                Id = 2, 
                Name = "Lucas", 
                Email = "lucas@radar-ambiental.com", 
                Password = "124", 
                Telephone = "(11)99876-5432", 
                CPF = 12345678901, 
                BirthDate = Convert.ToDateTime("10/01/1990")
            });
            
            users.Add(new User
            {
                Id = 3, 
                Name = "Flavia Firmino", 
                Email = "eng.flavia.firmino@gmail.com", 
                Password = "125", 
                Telephone = "(11)99876-5432", 
                CPF = 12345678901, 
                BirthDate = Convert.ToDateTime("10/01/1990")
            });
            
             users.Add(new User
            {
                Id = 4, 
                Name = "Viviane Buge", 
                Email = "vivianebuge@gmail.com", 
                Password = "126", 
                Telephone = "(11)99876-5432", 
                CPF = 12345678901, 
                BirthDate = Convert.ToDateTime("10/01/1990")
            });

            return users.Where(x => x.Email.ToLower() == email.ToLower() && x.Password == x.Password).FirstOrDefault();
        }

        public static User GetRegister(string Name, string Email,string Telephone,long CPF,DateTime BirthDate,string Password)
        {
            var register = new User();
            
            return register;
        }

    }
}