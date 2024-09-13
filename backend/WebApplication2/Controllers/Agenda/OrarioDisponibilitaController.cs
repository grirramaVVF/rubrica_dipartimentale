using Microsoft.AspNetCore.Mvc;

using ApiRubricaDipartimentale.Models.Agenda;

namespace ApiRubricaDipartimentale.Controllers.Agenda
{
    [ApiController]
    [Route("api/Agenda/[controller]")]
    public class OrarioDisponibilitaController : ControllerBase
    {

        [HttpPost("Create")]
        public IActionResult Create([FromBody] OrarioDisponibilita availability)
        {
            return Created("", availability);
        }

        [HttpGet("Read")]
        public IActionResult Read([FromQuery] int Id)
        {
            var availability = new OrarioDisponibilita { IdOrario = 1 }; // Simulated availability reading
            return Ok(availability);
        }

        [HttpPut("Update")]
        public IActionResult Update([FromBody] OrarioDisponibilita availability)
        {
            return Ok(availability);
        }

        [HttpDelete("Delete")]
        public IActionResult Delete([FromQuery] int Id)
        {
            return Ok();
        }

        [HttpGet("GetLista")]
        public IActionResult GetLista()
        {
            var lista = new List<OrarioDisponibilita>
            {
            }; // Simulated data

            return Ok(lista);
        }

        // chiamate particolari
        [HttpGet("GetFunzionariDisponibiliDaA")]
        public IActionResult GetFunzionariDisponibiliDaA([FromQuery] DateOnly Da, [FromQuery] DateOnly A)
        {
            var availabilities = new List<string> { "Funzionario1: 09:00-17:00", "Funzionario2: 10:00-18:00" }; // Simulated data
            return Ok(availabilities);
        }

        [HttpGet("GetDisponibilitaFunzionarioDaA")]
        public IActionResult GetDisponibilitaFunzionarioDaA([FromQuery] int IdUtente, [FromQuery] DateOnly Da, [FromQuery] DateOnly A)
        {
            var availabilities = new List<string> { "09:00-17:00", "10:00-18:00" }; // Simulated data
            return Ok(availabilities);
        }

    }
}




