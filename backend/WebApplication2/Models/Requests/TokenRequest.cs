using Swashbuckle.AspNetCore.Annotations;
using System.ComponentModel.DataAnnotations;

namespace ApiRubricaDipartimentale.Models.Requests
{
    public class TokenRequest
    {
        [SwaggerParameter("Nome utente", Required = true)]
        [Required]
        public string Username { get; set; }

        [SwaggerParameter("Password utente", Required = true)]
        [Required]
        public string Password { get; set; }
    }
}

