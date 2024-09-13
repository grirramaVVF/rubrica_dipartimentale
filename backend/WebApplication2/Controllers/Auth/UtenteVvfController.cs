using Microsoft.AspNetCore.Mvc;

using ApiRubricaDipartimentale.Models.Responses;
using ApiRubricaDipartimentale.Models.Auth;
using ApiRubricaDipartimentale.Data;
using Microsoft.AspNetCore.Authorization;
using Swashbuckle.AspNetCore.Annotations;

namespace ApiRubricaDipartimentale.Controllers.Auth
{
    [ApiController]
    [Route("api/Auth/[controller]")]
    public class UtenteVvfController : ControllerBase
    {

        private readonly ApplicationDbContext _db_context;

        public UtenteVvfController(ApplicationDbContext db_context)
        {
            _db_context = db_context;
        }

        // chiamate CRUD
        [HttpPost("Create")]
        [Authorize]
        public IActionResult Create([FromBody] UtenteVvf user)
        {
            return Created("", user);
        }

        [HttpGet("Read")]
        [Authorize]
        public IActionResult Read([FromQuery] int Id)
        {
            var utente = new UtenteVvf { IdUtente = 1 }; // Simulated reading
            return Ok(utente);
        }

        [HttpPut("Update")]
        [Authorize]
        public IActionResult Update([FromBody] UtenteVvf user)
        {
            return Ok(user);
        }

        [HttpDelete("Delete")]
        [Authorize]
        public IActionResult Delete([FromQuery] int Id)
        {
            return Ok();
        }

        [HttpGet("GetLista")]
        [Authorize]

        [SwaggerResponse(200, "Item retrieved successfully", typeof(List<UtenteVvf>))]
        [SwaggerResponse(400, "Invalid request", typeof(ErrorResponse))]
        [SwaggerResponse(401, "Unauthorized", typeof(ErrorResponse))]
        [SwaggerResponse(500, "InternalServerError", typeof(ErrorResponse))]
        public IActionResult GetLista()
        {
            try
            {
                var lista = _db_context.UtentiVvf.ToList();
                return Ok(lista);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new ErrorResponse { Success = false, Message = ex.Message });
            }
        }

        // chiamate particolari
        [HttpGet("GetByCf")]
        [Authorize]
        public IActionResult GetByCf([FromQuery] string cf)
        {
            var user = new UtenteVvf { IdUtente = 1, UsernameDipvvf = "sss@dipvvf.it" }; // Simulated user reading
            return Ok(user);
        }

        [HttpGet("GetByCognome")]
        [Authorize]
        public IActionResult GetByCognome([FromQuery] string cf)
        {
            var user = new UtenteVvf { IdUtente = 1, UsernameDipvvf = "sss@dipvvf.it" }; // Simulated user reading
            return Ok(user);
        }

    }
}




