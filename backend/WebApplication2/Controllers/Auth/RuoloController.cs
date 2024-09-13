
using Microsoft.AspNetCore.Mvc;

using ApiRubricaDipartimentale.Data;
using ApiRubricaDipartimentale.Models.Auth;
using ApiRubricaDipartimentale.Models.Responses;
using Microsoft.AspNetCore.Authorization;
using Swashbuckle.AspNetCore.Annotations;

namespace ApiRubricaDipartimentale.Controllers.Auth
{
    [ApiController]
    [Route("api/Auth/[controller]")]
    public class RuoloController : ControllerBase
    {

        private readonly ApplicationDbContext _db_context;

        public RuoloController(ApplicationDbContext db_context)
        {
            _db_context = db_context;
        }

        // chiamate CRUD
        [HttpPost("Create")]
        [Authorize]
        public IActionResult Create([FromBody] Ruolo profile)
        {
            return Created("", profile);
        }

        [HttpGet("Read")]
        [Authorize]
        public IActionResult Read([FromQuery] int Id)
        {
            var profilo = new Ruolo { IdRuolo = 1, DescrizioneRuolo = "SampleProfile" }; // Simulated profile reading
            return Ok(profilo);
        }

        [HttpPut("Update")]
        [Authorize]
        public IActionResult Update([FromBody] Ruolo profile)
        {
            return Ok(profile);
        }

        [HttpDelete("Delete")]
        [Authorize]
        public IActionResult Delete([FromQuery] int Id)
        {
            return Ok();
        }

        // chiamate particolari
        [HttpGet("GetLista")]
        [Authorize]

        [SwaggerResponse(200, "Item retrieved successfully", typeof(List<Ruolo>))]
        [SwaggerResponse(400, "Invalid request", typeof(ErrorResponse))]
        [SwaggerResponse(401, "Unauthorized", typeof(ErrorResponse))]
        [SwaggerResponse(500, "InternalServerError", typeof(ErrorResponse))]
        public IActionResult GetLista()
        {
            try
            {
                var lista = _db_context.Ruoli.ToList(); 
                return Ok(lista);
            }
            catch (Exception ex) {
                return StatusCode(500, new ErrorResponse { Success = false, Message = ex.Message });
            }
        }

    }


}









