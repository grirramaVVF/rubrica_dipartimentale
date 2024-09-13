using Microsoft.AspNetCore.Mvc;

using ApiRubricaDipartimentale.Models.Rubrica;

namespace ApiRubricaDipartimentale.Controllers.Rubrica
{
    [ApiController]
    [Route("api/Rubrica/[controller]")]
    public class TipologiaCarrieraController : ControllerBase
    {
        // chiamate crud

        [HttpPost("Create")]
        public IActionResult Create([FromBody] TipologiaCarriera tipologia)
        {
            return Created("", tipologia);
        }

        [HttpGet("Read")]
        public IActionResult Read([FromQuery] int Id)
        {
            var tipologia = new TipologiaCarriera { IdTipoCarriera = 1 }; // Simulated
            return Ok(tipologia);
        }

        [HttpPut("Update")]
        public IActionResult Update([FromBody] TipologiaCarriera tipologia)
        {
            return Ok(tipologia);
        }

        [HttpDelete("Delete")]
        public IActionResult Delete([FromQuery] int Id)
        {
            return Ok();
        }

        [HttpGet("GetLista")]
        public IActionResult GetLista()
        {
            var lista = new List<TipologiaCarriera>
            {

            };
            return Ok(lista);
        }

    }

}


