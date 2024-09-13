using Microsoft.AspNetCore.Mvc;

using ApiRubricaDipartimentale.Models.Rubrica;

namespace ApiRubricaDipartimentale.Controllers.Rubrica
{
    [ApiController]
    [Route("api/Rubrica/[controller]")]
    public class ContattoHasUfficioController : ControllerBase
    {

        //chimate CRUD

        [HttpPost("Create")]
        public IActionResult Create([FromBody] ContattoHasUfficio assignment)
        {
            return Created("", assignment);
        }

        [HttpGet("Read")]
        public IActionResult Read([FromQuery] int Id)
        {
            var assignment = new ContattoHasUfficio { IdContatto = 1, IdUfficio = 1 }; // Simulated reading
            return Ok(assignment);
        }

        [HttpPut("Update")]
        public IActionResult Update([FromBody] ContattoHasUfficio assignment)
        {
            return Ok(assignment);
        }

        [HttpDelete("Delete")]
        public IActionResult Delete([FromQuery] int Id)
        {
            return Ok();
        }

        // chiamate particolari
        [HttpGet("GetLista")]
        public IActionResult GetLista()
        {
            var lista = new List<ContattoHasUfficio>
            {

            };
            return Ok(lista);
        }
    }

}


