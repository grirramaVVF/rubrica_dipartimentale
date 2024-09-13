using Microsoft.AspNetCore.Mvc;

using ApiRubricaDipartimentale.Models.Rubrica;
using ApiRubricaDipartimentale.Services;

namespace ApiRubricaDipartimentale.Controllers.Rubrica
{
    [ApiController]
    [Route("api/Rubrica/[controller]")]
    public class ContattoController : ControllerBase
    {
        private readonly WuacService _wuacApiService;

        public ContattoController(WuacService wuacApiService)
        {
            _wuacApiService = wuacApiService;
        }

        // chiamate crud

        [HttpPost("Create")]
        public IActionResult Create([FromBody] Contatto contatto)
        {
            return Created("", contatto);
        }

        [HttpGet("Read")]
        public IActionResult Read([FromQuery] int Id)
        {
            var contatto = new Contatto { CodiceFiscale = "SampleUser" }; // Simulated user reading
            return Ok(contatto);
        }

        [HttpPut("Update")]
        public IActionResult Update([FromBody] Contatto contatto)
        {
            return Ok(contatto);
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
            var lista = new List<Contatto>
            {

            };
            return Ok(lista);
        }

        [HttpGet("GetByCodiceFiscaleFromWauc")]
        public async Task<IActionResult> GetByCodiceFiscaleFromWauc([FromQuery] string cf)
        {
            var endpoint = "https://wauc.dipvvf.it/api/Personale?codiciFiscali=" + cf;

            var result = await _wuacApiService.GetFromWaucAsync<object>(endpoint);
            return Ok(result);
        }
    }

}


