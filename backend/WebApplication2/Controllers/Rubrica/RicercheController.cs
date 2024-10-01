using ApiRubricaDipartimentale.Services;
using Microsoft.AspNetCore.Mvc;
using ApiRubricaDipartimentale.Data;

namespace ApiRubricaDipartimentale.Controllers.Rubrica
{
    [ApiController]
    [Route("api/Rubrica/[controller]")]
    public class RicercheController : ControllerBase
    {
        private readonly WuacService _wuacApiService;
        private readonly ApplicationDbContext _db_context;

        public RicercheController(WuacService wuacApiService,ApplicationDbContext db_context)
        {
            _wuacApiService = wuacApiService;
            _db_context = db_context;
        }

        [HttpGet("Cerca")]
        public IActionResult Cerca([FromQuery] string Search)
        {
            var offices = new List<string> { "Office1", "Office2" }; // Simulated data
            return Ok(offices);
        }

        [HttpGet("GetUfficiByIdSede")]
        public IActionResult GetUfficiByIdSede([FromQuery] string IdSede)
        {
            //var offices = new List<string> { "Office1", "Office2" }; // Simulated data
            var offices = _db_context.Uffici.Where(u => u.IdSede == IdSede).ToList();
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

        [HttpGet("GetContattiByIdUfficio")]
        public IActionResult GetContattiByIdUfficio([FromQuery] int IdUfficio)
        {
            //var officeMembers = new List<string> { "UserX", "UserY" }; // Simulated data
            var officeMembers = _db_context.ContattoHasUfficios.Where(u => u.IdUfficio == IdUfficio).ToList();
            
            var joinResult = _db_context.Contatti
                //.Where(u => u.IdUfficio == IdUfficio)
                .Join(
                _db_context.ContattoHasUfficios,
                c => c.IdContatto,  // Chiave primaria
                u => u.IdContatto,    // Chiave esterna
                (c, u) => new
                {
                    UfficioId = u.IdUfficio,
                    ContattoCognome = c.Cognome,
                    ContattoTelefono = c.Telefono,
                })
                .Where(result => result.UfficioId == IdUfficio);  // Condizione WHERE
                ;
     
            return Ok(joinResult);
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

