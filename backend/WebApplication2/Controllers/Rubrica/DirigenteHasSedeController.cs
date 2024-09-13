using Microsoft.AspNetCore.Mvc;

using ApiRubricaDipartimentale.Models.Rubrica;

namespace ApiRubricaDipartimentale.Controllers.Rubrica
{
    [ApiController]
    [Route("api/Rubrica/[controller]")]
    public class DirigenteHasSedeController : ControllerBase
    {
        // chiamate crud

        [HttpPost("Create")]
        public IActionResult Create([FromBody] DirigenteHasSede dirigenteHasSede) 
        { 
            return Created("", dirigenteHasSede);
        }

        [HttpGet("Read")]
        public IActionResult Read([FromQuery] int Id)
        {
            var dirigenteHasSede = new DirigenteHasSede { Id = 1 }; // Simulated
            return Ok(dirigenteHasSede);
        }

        [HttpPut("Update")]
        public IActionResult Update([FromBody] DirigenteHasSede dirigenteHasSede)
        {
            return Ok(dirigenteHasSede);
        }

        [HttpDelete("Delete")]
        public IActionResult Delete([FromQuery] int Id)
        {
            return Ok();
        }

        [HttpGet("GetLista")]
        public IActionResult GetLista()
        {
            var lista = new List<DirigenteHasSede>
            {

            };
            return Ok(lista);
        }

        // chiamate particolari
        [HttpGet("GetDirigenteByIdSede")]
        public IActionResult GetDirigenteByIdSede([FromQuery] string IdSede)
        {
            var contatto = new Contatto { IdContatto = 1, CodiceFiscale = "SampleCf" }; // Simulated 
            return Ok(contatto);
        }

        [HttpGet("GetSedeDirettaByIdContatto")]
        public IActionResult GetSedeDirettaByIdContatto([FromQuery] string IdContatto)
        {
            var id_sede = 1; // Simulated
            return Ok(id_sede);
        }
    }

}

