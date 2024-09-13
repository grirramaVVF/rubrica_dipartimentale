using Microsoft.AspNetCore.Mvc;

using ApiRubricaDipartimentale.Models.Rubrica;
using System.Threading;

namespace ApiRubricaDipartimentale.Controllers.Rubrica
{
    [ApiController]
    [Route("api/Rubrica/[controller]")]
    public class CarrieraDirigenzialeController : ControllerBase
    {
        // chiamate crud

        [HttpPost("Create")]
        public IActionResult Create([FromBody] CarrieraDirigenziale carriera)
        {
            return Created("", carriera);
        }

        [HttpGet("Read")]
        public IActionResult Read([FromQuery] int Id)
        {
            var carriera = new CarrieraDirigenziale { Id = 1 }; // Simulated 
            return Ok(carriera);
        }

        [HttpPut("Update")]
        public IActionResult Update([FromBody] CarrieraDirigenziale carriera)
        {
            return Ok(carriera);
        }

        [HttpDelete("Delete")]
        public IActionResult Delete([FromQuery] int Id)
        {
            return Ok();
        }

          [HttpGet("GetLista")]
        public IActionResult GetLista()
        {
            var lista = new List<CarrieraDirigenziale>
            {

            };
            return Ok(lista);
        }

    }

}


