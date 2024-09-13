using Microsoft.AspNetCore.Mvc;

using ApiRubricaDipartimentale.Models.Agenda;

namespace ApiRubricaDipartimentale.Controllers.Agenda
{
    [ApiController]
    [Route("api/Agenda/[controller]")]
    public class AppuntamentoController : ControllerBase
    {

        [HttpPost("Create")]
        public IActionResult Create([FromBody] Appuntamento appuntamento)
        {
            return Created("", appuntamento);
        }

        [HttpGet("Read")]
        public IActionResult Read([FromQuery] int Id)
        {
            var appuntamento = new Appuntamento { Note = "SampleAppointment" }; // Simulated appointment reading
            return Ok(appuntamento);
        }

        [HttpPut("Update")]
        public IActionResult Update([FromBody] Appuntamento appuntamento)
        {
            return Ok(appuntamento);
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
            var lista = new List<Appuntamento>
            {
            }; // Simulated data

            return Ok(lista);
        }

        [HttpPut("Conferma")]
        public IActionResult ConfermaAppuntamento([FromBody] int IdAppuntamento)
        {
            return Ok(IdAppuntamento);
        }

        [HttpPut("Rifiuta")]
        public IActionResult RifiutaAppuntamento([FromBody] int IdAppuntamento, string Note)
        {
            return Ok(IdAppuntamento);
        }

    }
}



