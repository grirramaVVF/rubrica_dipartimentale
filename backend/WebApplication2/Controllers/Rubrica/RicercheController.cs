using ApiRubricaDipartimentale.Services;
using Microsoft.AspNetCore.Mvc;

namespace ApiRubricaDipartimentale.Controllers.Rubrica
{
    [ApiController]
    [Route("api/Rubrica/[controller]")]
    public class RicercheController : ControllerBase
    {
        private readonly WuacService _wuacApiService;

        public RicercheController(WuacService wuacApiService)
        {
            _wuacApiService = wuacApiService;
        }

        [HttpGet("Cerca")]
        public IActionResult Cerca([FromQuery] string Search)
        {
            var offices = new List<string> { "Office1", "Office2" }; // Simulated data
            return Ok(offices);
        }

        [HttpGet("GetUfficiByIdSede")]
        public IActionResult GetUfficiByIdSede([FromQuery] int IdSede)
        {
            var offices = new List<string> { "Office1", "Office2" }; // Simulated data
            return Ok(offices);
        }

        [HttpGet("GetDistaccamentiByIdSede")]
        public IActionResult GetDistaccamentiByIdSede([FromQuery] int IdSede)
        {
            var offices = new List<string> { "Dist1", "Dist2" }; // Simulated data
            return Ok(offices);
        }

        [HttpGet("GetUfficiEContattiByIdSede")]
        public IActionResult GetUfficiEContattiByIdSede([FromQuery] int IdSede)
        {
            var officesAndMembers = new List<string> { "Office1: User1, User2", "Office2: User3, User4" }; // Simulated data
            return Ok(officesAndMembers);
        }

        [HttpGet("GetUfficiByCodiceFiscaleContatto")]
        public IActionResult GetUfficiByCodiceFiscaleContatto([FromQuery] string CodiceFiscale)
        {
            var offices = new List<string> { "Office1", "Office2" }; // Simulated data
            return Ok(offices);
        }

        [HttpGet("GetUfficiByCognomeContatto")]
        public IActionResult GetUfficiByCognomeContatto([FromQuery] string Cognome)
        {
            var offices = new List<string> { "Office1", "Office2" }; // Simulated data
            return Ok(offices);
        }

        [HttpGet("GetUfficiByIdContatto")]
        public IActionResult GetUfficiByIdContatto([FromQuery] int IdContatto)
        {
            var offices = new List<string> { "Office1", "Office2" }; // Simulated data
            return Ok(offices);
        }

        [HttpGet("GetContattiByIdSede")]
        public IActionResult GetContattiByIdSede()
        {
            var officesAndMembers = new List<string> { "Office1: User1, User2", "Office2: User3, User4" }; // Simulated data
            return Ok(officesAndMembers);
        }

        [HttpGet("GetColoreDellaSede")]
        public IActionResult GetColoreDellaSede([FromQuery] string IdSede)
        {
            var officesAndMembers = new List<string> { "Office1: User1, User2", "Office2: User3, User4" }; // Simulated data
            return Ok(officesAndMembers);
        }


        //chiamate WUAC
        
        [HttpGet("GetChildSedeFromWauc")]
        public async Task<IActionResult> GetChildSedeFromWauc([FromQuery] string IdSede)
        {
            var endpoint = "https://wauc.dipvvf.it/api/Sedi/GetChildSede?codSede=" + IdSede;

            var result = await _wuacApiService.GetFromWaucAsync<object>(endpoint);
            return Ok(result);
        }

        [HttpGet("GetInfoSedeFromWauc")]
        public async Task<IActionResult> GetInfoSedeFromWauc([FromQuery] string IdSede)
        {
            var endpoint = "https://wauc.dipvvf.it/api/Sedi/GetInfoSede?codSede=" + IdSede;

            var result = await _wuacApiService.GetFromWaucAsync<object>(endpoint);
            return Ok(result);
        }

        [HttpGet("GetDirezioniRegionaliFromWauc")]
        public async Task<IActionResult> GetDirezioniRegionaliFromWauc([FromQuery] string ?IdSede)
        {
            var endpoint = "https://wauc.dipvvf.it/api/Sedi/GetDirezioniRegionali?codSede=" + IdSede;

            var result = await _wuacApiService.GetFromWaucAsync<object>(endpoint);
            return Ok(result);
        }

        [HttpGet("GetDirezioniCentraliFromWauc")]
        public async Task<IActionResult> GetDirezioniCentraliFromWauc([FromQuery] string? IdSede)
        {
            var endpoint = "https://wauc.dipvvf.it/api/Sedi/GetDirezioniCentrali?codSede=" + IdSede;

            var result = await _wuacApiService.GetFromWaucAsync<object>(endpoint);
            return Ok(result);
        }

        [HttpGet("GetComandiProvincialiFromWauc")]
        public async Task<IActionResult> GetComandiProvincialiFromWauc([FromQuery] string? IdSede)
        {
            var endpoint = "https://wauc.dipvvf.it/api/Sedi/GetComandiProvinciali?codSede=" + IdSede;

            var result = await _wuacApiService.GetFromWaucAsync<object>(endpoint);
            return Ok(result);
        }
    }
}

