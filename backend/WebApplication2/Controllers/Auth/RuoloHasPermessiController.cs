using ApiRubricaDipartimentale.Data;
using ApiRubricaDipartimentale.Models.Auth;
using ApiRubricaDipartimentale.Models.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace ApiRubricaDipartimentale.Controllers.Auth
{

    [ApiController]
    [Route("api/Auth/[controller]")]
    public class RuoloHasPermessiController : ControllerBase
    {
        private readonly ApplicationDbContext _db_context;

        public RuoloHasPermessiController(ApplicationDbContext db_context)
        {
            _db_context = db_context;
        }


        // Assegnazioni Permessi a Ruolo: chiamate CRUD
        [HttpPost("Create")]
        [Authorize]
        public IActionResult Create([FromBody] RuoloHasPermessi assignment)
        {
            return Created("", assignment);
        }

        [HttpGet("Read")]
        [Authorize]
        public IActionResult Read([FromQuery] int Id)
        {
            var assignment = new RuoloHasPermessi { Id = 1 }; // Simulated reading
            return Ok(assignment);
        }

        [HttpPut("Update")]
        [Authorize]
        public IActionResult Update([FromBody] RuoloHasPermessi assignment)
        {
            return Ok(assignment);
        }

        [HttpDelete("Delete")]
        [Authorize]
        public IActionResult Delete([FromQuery] int Id)
        {
            return Ok();
        }

        [HttpGet("GetLista")]
        [Authorize]

        [SwaggerResponse(200, "Item retrieved successfully", typeof(List<RuoloHasPermessi>))]
        [SwaggerResponse(400, "Invalid request", typeof(ErrorResponse))]
        [SwaggerResponse(401, "Unauthorized", typeof(ErrorResponse))]
        [SwaggerResponse(500, "InternalServerError", typeof(ErrorResponse))]
        public IActionResult GetLista()
        {
            try
            {
                var lista = _db_context.RuoloHasPermessi.ToList();
                return Ok(lista);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new ErrorResponse { Success = false, Message = ex.Message });
            }
        }

    }
}
