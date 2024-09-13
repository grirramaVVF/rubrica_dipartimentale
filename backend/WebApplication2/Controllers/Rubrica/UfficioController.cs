using Microsoft.AspNetCore.Mvc;

using ApiRubricaDipartimentale.Models.Rubrica;

namespace ApiRubricaDipartimentale.Controllers.Rubrica
{
    [ApiController]
    [Route("api/Rubrica/[controller]")]
    public class UfficioController : ControllerBase
    {
        // chiamate CRUD
        [HttpPost("Create")]
        public IActionResult Create([FromBody] Ufficio office)
        {
            return Created("", office);
        }

        [HttpGet("Read")]
        public IActionResult Read([FromQuery] int Id)
        {
            var office = new Ufficio { IdUfficio = 1 }; // Simulated office reading
            return Ok(office);
        }

        [HttpPut("Update")]
        public IActionResult Update([FromBody] Ufficio office)
        {
            return Ok(office);
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
            var lista = new List<Ufficio>
            {

            };
            return Ok(lista);
        }
    }
}





