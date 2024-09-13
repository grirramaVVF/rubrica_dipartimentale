using Microsoft.AspNetCore.Mvc;

using ApiRubricaDipartimentale.Models.Responses;
using ApiRubricaDipartimentale.Data;
using ApiRubricaDipartimentale.Models.Auth;
using Microsoft.AspNetCore.Authorization;
using Swashbuckle.AspNetCore.Annotations;

namespace ApiRubricaDipartimentale.Controllers.Auth
{
    [ApiController]
    [Route("api/Auth/[controller]")]
    public class ParametroSedeController : ControllerBase
    {

        private readonly ApplicationDbContext _db_context;

        public ParametroSedeController(ApplicationDbContext db_context)
        {
            _db_context = db_context;
        }

        // chiamate CRUD
        [HttpPost("Create")]
        [Authorize]
        public IActionResult Create([FromBody] ParametroSede parametro)
        {
            return Created("", parametro);
        }

        [HttpGet("Read")]
        [Authorize]
        public IActionResult Read([FromQuery] int Id)
        {
            var profilo = new ParametroSede { IdParametro = 1, Nome = "SampleProfile", JsonValori = "" }; // Simulated profile reading
            return Ok(profilo);
        }

        [HttpPut("Update")]
        [Authorize]
        public IActionResult Update([FromBody] ParametroSede parametro)
        {
            return Ok(parametro);
        }

        [HttpDelete("Delete")]
        [Authorize]
        public IActionResult Delete([FromQuery] int Id)
        {
            return Ok();
        }

        // chiamate particolari
        [SwaggerResponse(401, "Unauthorized", typeof(ErrorResponse))]
        [HttpGet("GetLista")]
        [Authorize]

        [SwaggerResponse(200, "Item retrieved successfully", typeof(List<ParametroSede>))]
        [SwaggerResponse(400, "Invalid request", typeof(ErrorResponse))]
        [SwaggerResponse(401, "Unauthorized", typeof(ErrorResponse))]
        [SwaggerResponse(500, "InternalServerError", typeof(ErrorResponse))]
        public IActionResult GetLista()
        {
            try
            {
                var lista = _db_context.ParametriSede.ToList();
                return Ok(lista);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new ErrorResponse { Success = false, Message = ex.Message });
            }
        }

    }

}
