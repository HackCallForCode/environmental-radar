using System.Threading.Tasks;
using environmental_radar.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using environmental_radar.Models;
using environmental_radar.Services;
using System;

namespace environmental_radar.Controllers
{
    [Route("home")]
    public class HomeControllers : ControllerBase
    {
        [HttpPost]
        [Route("login")]
        [AllowAnonymous]
        public async Task<ActionResult<dynamic>> Authenticate([FromBody] User model)
        {
            var user = UserRepository.GetUser(model.Email, model.Password);

            if (user == null)
            {
                return NotFound(new { message = "Usuário ou Senha Inválido" });
            }

            var token = TokenService.GenerateToken(user);

            user.Password = "";

            return new
            {
                user = user,
                token = token
            };
        }

        [HttpPost]
        [Route("register")]
        [AllowAnonymous]
        public async Task<ActionResult<dynamic>> Post([FromBody] User model)
        {
            var register = UserRepository.GetRegister(model.Name, model.Email, model.Telephone, model.CPF, model.BirthDate, model.Password);

            if (register == null)
            {
                return new { message = "Faltou Inserir dados em alguma coluna" };
            }
          
            return new{ message = "Usuário cadastrado com sucesso" };

        }


        [HttpGet]
        [Route("authenticated")]
        [Authorize]
        public string Authenticaded() => String.Format("Autenticado - {0}", User.Identity.Name);

    }
}