using Microsoft.AspNetCore.Mvc;

using ApiRubricaDipartimentale.Models.Agenda;

namespace ApiRubricaDipartimentale.Controllers.Agenda
{
    [ApiController]
    [Route("api/Agenda/[controller]")]

    public class StatoAppuntamentoController : ControllerBase
    {
        [HttpPost("Create")]
        public IActionResult Create([FromBody] StatoAppuntamento tipo)
        {
            return Created("", tipo);
        }

        [HttpGet("Read")]
        public IActionResult Read([FromQuery] int Id)
        {
            var tipo = new StatoAppuntamento { IdStato = Id, Descrizione = "Sample" }; // Simulated request reading
            return Ok(tipo);
        }

        [HttpPut("Update")]
        public IActionResult Update([FromBody] StatoAppuntamento tipo)
        {
            return Ok(tipo);
        }

        [HttpDelete("Delete")]
        public IActionResult Delete([FromQuery] int Id)
        {
            return Ok();
        }

        [HttpGet("GetLista")]
        public IActionResult GetLista()
        {
            var lista = new List<StatoAppuntamento>
            {
            }; // Simulated data

            return Ok(lista);
        }

    }
}

