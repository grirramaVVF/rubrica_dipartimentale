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
        public async Task<IActionResult> GetDirezioniRegionaliFromWauc()
        {
            //var endpoint = "https://wauc.dipvvf.it/api/Sedi/GetDirezioniRegionali";
            //var result = await _wuacApiService.GetFromWaucAsync<object>(endpoint);
            string result = @"[{""id"":""01"",""descrizione"":""DIREZIONE REGIONALE VV.F. PIEMONTE"",""codAOO"":""DIR-PIE""},{""id"":""02"",""descrizione"":""DIREZIONE REGIONALE VV.F. LOMBARDIA"",""codAOO"":""DIR-LOM""},{""id"":""03"",""descrizione"":""DIREZIONE REGIONALE VV.F. LIGURIA"",""codAOO"":""DIR-LIG""},{""id"":""04"",""descrizione"":""DIREZIONE REGIONALE VV.F. VENETO"",""codAOO"":""DIR-VEN""},{""id"":""05"",""descrizione"":""DIREZIONE REGIONALE VV.F. FRIULI VENEZIA GIULIA"",""codAOO"":""DIR-FVG""},{""id"":""06"",""descrizione"":""DIREZIONE REGIONALE VV.F. EMILIA ROMAGNA"",""codAOO"":""DIR-EMI""},{""id"":""07"",""descrizione"":""DIREZIONE REGIONALE VV.F. TOSCANA"",""codAOO"":""DIR-TOS""},{""id"":""09"",""descrizione"":""DIREZIONE REGIONALE VV.F. MARCHE"",""codAOO"":""DIR-MAR""},{""id"":""10"",""descrizione"":""DIREZIONE REGIONALE VV.F. LAZIO"",""codAOO"":""DIR-LAZ""},{""id"":""12"",""descrizione"":""DIREZIONE REGIONALE VV.F. UMBRIA"",""codAOO"":""DIR-UMB""},{""id"":""13"",""descrizione"":""DIREZIONE REGIONALE VV.F. CAMPANIA"",""codAOO"":""DIR-CAM""},{""id"":""15"",""descrizione"":""DIREZIONE REGIONALE VV.F. PUGLIA"",""codAOO"":""DIR-PUG""},{""id"":""16"",""descrizione"":""DIREZIONE REGIONALE VV.F. CALABRIA"",""codAOO"":""DIR-CAL""},{""id"":""17"",""descrizione"":""DIREZIONE REGIONALE VV.F. SARDEGNA"",""codAOO"":""DIR-SAR""},{""id"":""18"",""descrizione"":""DIREZIONE REGIONALE VV.F. SICILIA"",""codAOO"":""DIR-SIC""},{""id"":""19"",""descrizione"":""DIREZIONE REGIONALE VV.F. BASILICATA"",""codAOO"":""DIR-BAS""},{""id"":""20"",""descrizione"":""DIREZIONE REGIONALE VV.F. ABRUZZO"",""codAOO"":""DIR-ABR""},{""id"":""21"",""descrizione"":""DIREZIONE REGIONALE VV.F. MOLISE"",""codAOO"":""DIR-MOL""}]";
            return Ok(result);
        }

        [HttpGet("GetDirezioniCentraliFromWauc")]
        public async Task<IActionResult> GetDirezioniCentraliFromWauc()
        {
            //var endpoint = "https://wauc.dipvvf.it/api/Sedi/GetDirezioniCentrali";
            //var result = await _wuacApiService.GetFromWaucAsync<object>(endpoint);
            string result = @"[{""id"":""002"",""descrizione"":""DIREZIONE CENTRALE PER L'EMERGENZA E IL SOCCORSO TECNICO E L'ANTINCENDIO BOSCHIVO"",""codAOO"":""DCEMER""},{""id"":""003"",""descrizione"":""DIREZIONE CENTRALE PER LA PREVENZIONE E LA SICUREZZA TECNICA, ANTINCENDIO ED ENERGETICA"",""codAOO"":""DCPREV""},{""id"":""005"",""descrizione"":""DIREZIONE CENTRALE PER LA FORMAZIONE"",""codAOO"":""DCFORM""},{""id"":""007"",""descrizione"":""DIREZIONE CENTRALE PER LA PROGRAMMAZIONE E GLI AFFARI ECONOMICI E FINANZIARI"",""codAOO"":""DCRISFIN""},{""id"":""009"",""descrizione"":""DIREZIONE CENTRALE PER L'INNOVAZIONE TECNOLOGICA, LA DIGITALIZZAZIONE E PER I BENI E LE RISORSE LOGISTICHE E STRUMENTALI"",""codAOO"":""DCRISLOG""},{""id"":""004"",""descrizione"":""DIREZIONE CENTRALE DELLA DIFESA CIVILE E DELLE POLITICHE DI PROTEZIONE CIVILE - VICE CAPO DIPARTIMENTO"",""codAOO"":""DCDIF""},{""id"":""006"",""descrizione"":""DIREZIONE CENTRALE PER LE RISORSE UMANE"",""codAOO"":""DCRISUM""},{""id"":""008"",""descrizione"":""DIREZIONE CENTRALE PER L'AMMINISTRAZIONE GENERALE"",""codAOO"":""DCAFFGEN""}]"; return Ok(result);
        }

        [HttpGet("GetComandiProvincialiFromWauc")]
        public async Task<IActionResult> GetComandiProvincialiFromWauc()
        {
            //var endpoint = "https://wauc.dipvvf.it/api/Sedi/GetComandiProvinciali";
            //var result = await _wuacApiService.GetFromWaucAsync<object>(endpoint);
            string result = @"[{""id"":""AL"",""descrizione"":""COMANDO VV.F. ALESSANDRIA"",""codAOO"":""COM-AL""},{""id"":""AT"",""descrizione"":""COMANDO VV.F. ASTI"",""codAOO"":""COM-AT""},{""id"":""BI"",""descrizione"":""COMANDO VV.F. BIELLA"",""codAOO"":""COM-BI""},{""id"":""CN"",""descrizione"":""COMANDO VV.F. CUNEO"",""codAOO"":""COM-CN""},{""id"":""NO"",""descrizione"":""COMANDO VV.F. NOVARA"",""codAOO"":""COM-NO""},{""id"":""TO"",""descrizione"":""COMANDO VV.F. TORINO"",""codAOO"":""COM-TO""},{""id"":""VB"",""descrizione"":""COMANDO VV.F. VERBANO-CUSIO-OSSOLA"",""codAOO"":""COM-VB""},{""id"":""VC"",""descrizione"":""COMANDO VV.F. VERCELLI"",""codAOO"":""COM-VC""},{""id"":""BG"",""descrizione"":""COMANDO VV.F. BERGAMO"",""codAOO"":""COM-BG""},{""id"":""BS"",""descrizione"":""COMANDO VV.F. BRESCIA"",""codAOO"":""COM-BS""},{""id"":""CO"",""descrizione"":""COMANDO VV.F. COMO"",""codAOO"":""COM-CO""},{""id"":""CR"",""descrizione"":""COMANDO VV.F. CREMONA"",""codAOO"":""COM-CR""},{""id"":""LC"",""descrizione"":""COMANDO VV.F. LECCO"",""codAOO"":""COM-LC""},{""id"":""LO"",""descrizione"":""COMANDO VV.F. LODI"",""codAOO"":""COM-LO""},{""id"":""MB"",""descrizione"":""COMANDO VV.F. MONZA"",""codAOO"":""COM-MB""},{""id"":""MI"",""descrizione"":""COMANDO VV.F. MILANO"",""codAOO"":""COM-MI""},{""id"":""MN"",""descrizione"":""COMANDO VV.F. MANTOVA"",""codAOO"":""COM-MN""},{""id"":""PV"",""descrizione"":""COMANDO VV.F. PAVIA"",""codAOO"":""COM-PV""},{""id"":""SO"",""descrizione"":""COMANDO VV.F. SONDRIO"",""codAOO"":""COM-SO""},{""id"":""VA"",""descrizione"":""COMANDO VV.F. VARESE"",""codAOO"":""COM-VA""},{""id"":""GE"",""descrizione"":""COMANDO VV.F. GENOVA"",""codAOO"":""COM-GE""},{""id"":""IM"",""descrizione"":""COMANDO VV.F. IMPERIA"",""codAOO"":""COM-IM""},{""id"":""SP"",""descrizione"":""COMANDO VV.F. LA SPEZIA"",""codAOO"":""COM-SP""},{""id"":""SV"",""descrizione"":""COMANDO VV.F. SAVONA"",""codAOO"":""COM-SV""},{""id"":""BL"",""descrizione"":""COMANDO VV.F. BELLUNO"",""codAOO"":""COM-BL""},{""id"":""PD"",""descrizione"":""COMANDO VV.F. PADOVA"",""codAOO"":""COM-PD""},{""id"":""RO"",""descrizione"":""COMANDO VV.F. ROVIGO"",""codAOO"":""COM-RO""},{""id"":""TV"",""descrizione"":""COMANDO VV.F. TREVISO"",""codAOO"":""COM-TV""},{""id"":""VE"",""descrizione"":""COMANDO VV.F. VENEZIA"",""codAOO"":""COM-VE""},{""id"":""VI"",""descrizione"":""COMANDO VV.F. VICENZA"",""codAOO"":""COM-VI""},{""id"":""VR"",""descrizione"":""COMANDO VV.F. VERONA"",""codAOO"":""COM-VR""},{""id"":""GO"",""descrizione"":""COMANDO VV.F. GORIZIA"",""codAOO"":""COM-GO""},{""id"":""PN"",""descrizione"":""COMANDO VV.F. PORDENONE"",""codAOO"":""COM-PN""},{""id"":""TS"",""descrizione"":""COMANDO VV.F. TRIESTE"",""codAOO"":""COM-TS""},{""id"":""UD"",""descrizione"":""COMANDO VV.F. UDINE"",""codAOO"":""COM-UD""},{""id"":""BO"",""descrizione"":""COMANDO VV.F. BOLOGNA"",""codAOO"":""COM-BO""},{""id"":""FE"",""descrizione"":""COMANDO VV.F. FERRARA"",""codAOO"":""COM-FE""},{""id"":""FO"",""descrizione"":""COMANDO VV.F. FORLI'-CESENA"",""codAOO"":""COM-FC""},{""id"":""MO"",""descrizione"":""COMANDO VV.F. MODENA"",""codAOO"":""COM-MO""},{""id"":""PC"",""descrizione"":""COMANDO VV.F. PIACENZA"",""codAOO"":""COM-PC""},{""id"":""PR"",""descrizione"":""COMANDO VV.F. PARMA"",""codAOO"":""COM-PR""},{""id"":""RA"",""descrizione"":""COMANDO VV.F. RAVENNA"",""codAOO"":""COM-RA""},{""id"":""RE"",""descrizione"":""COMANDO VV.F. REGGIO EMILIA"",""codAOO"":""COM-RE""},{""id"":""RN"",""descrizione"":""COMANDO VV.F. RIMINI"",""codAOO"":""COM-RN""},{""id"":""AR"",""descrizione"":""COMANDO VV.F. AREZZO"",""codAOO"":""COM-AR""},{""id"":""FI"",""descrizione"":""COMANDO VV.F. FIRENZE"",""codAOO"":""COM-FI""},{""id"":""GR"",""descrizione"":""COMANDO VV.F. GROSSETO"",""codAOO"":""COM-GR""},{""id"":""LI"",""descrizione"":""COMANDO VV.F. LIVORNO"",""codAOO"":""COM-LI""},{""id"":""LU"",""descrizione"":""COMANDO VV.F. LUCCA"",""codAOO"":""COM-LU""},{""id"":""MS"",""descrizione"":""COMANDO VV.F. MASSA-CARRARA"",""codAOO"":""COM-MS""},{""id"":""PI"",""descrizione"":""COMANDO VV.F. PISA"",""codAOO"":""COM-PI""},{""id"":""PO"",""descrizione"":""COMANDO VV.F. PRATO"",""codAOO"":""COM-PO""},{""id"":""PT"",""descrizione"":""COMANDO VV.F. PISTOIA"",""codAOO"":""COM-PT""},{""id"":""SI"",""descrizione"":""COMANDO VV.F. SIENA"",""codAOO"":""COM-SI""},{""id"":""AN"",""descrizione"":""COMANDO VV.F. ANCONA"",""codAOO"":""COM-AN""},{""id"":""AP"",""descrizione"":""COMANDO VV.F. ASCOLI PICENO"",""codAOO"":""COM-AP""},{""id"":""FM"",""descrizione"":""COMANDO VV.F. FERMO"",""codAOO"":""COM-FM""},{""id"":""MC"",""descrizione"":""COMANDO VV.F. MACERATA"",""codAOO"":""COM-MC""},{""id"":""PS"",""descrizione"":""COMANDO VV.F. PESARO E URBINO"",""codAOO"":""COM-PU""},{""id"":""FR"",""descrizione"":""COMANDO VV.F. FROSINONE"",""codAOO"":""COM-FR""},{""id"":""LT"",""descrizione"":""COMANDO VV.F. LATINA"",""codAOO"":""COM-LT""},{""id"":""RI"",""descrizione"":""COMANDO VV.F. RIETI"",""codAOO"":""COM-RI""},{""id"":""RM"",""descrizione"":""COMANDO VV.F. ROMA"",""codAOO"":""COM-RM""},{""id"":""VT"",""descrizione"":""COMANDO VV.F. VITERBO"",""codAOO"":""COM-VT""},{""id"":""PG"",""descrizione"":""COMANDO VV.F. PERUGIA"",""codAOO"":""COM-PG""},{""id"":""TR"",""descrizione"":""COMANDO VV.F. TERNI"",""codAOO"":""COM-TR""},{""id"":""AV"",""descrizione"":""COMANDO VV.F. AVELLINO"",""codAOO"":""COM-AV""},{""id"":""BN"",""descrizione"":""COMANDO VV.F. BENEVENTO"",""codAOO"":""COM-BN""},{""id"":""CE"",""descrizione"":""COMANDO VV.F. CASERTA"",""codAOO"":""COM-CE""},{""id"":""NA"",""descrizione"":""COMANDO VV.F. NAPOLI"",""codAOO"":""COM-NA""},{""id"":""SA"",""descrizione"":""COMANDO VV.F. SALERNO"",""codAOO"":""COM-SA""},{""id"":""BA"",""descrizione"":""COMANDO VV.F. BARI"",""codAOO"":""COM-BA""},{""id"":""BR"",""descrizione"":""COMANDO VV.F. BRINDISI"",""codAOO"":""COM-BR""},{""id"":""BT"",""descrizione"":""COMANDO VV.F. BARLETTA-ANDRIA-TRANI"",""codAOO"":""COM-BT""},{""id"":""FG"",""descrizione"":""COMANDO VV.F. FOGGIA"",""codAOO"":""COM-FG""},{""id"":""LE"",""descrizione"":""COMANDO VV.F. LECCE"",""codAOO"":""COM-LE""},{""id"":""TA"",""descrizione"":""COMANDO VV.F. TARANTO"",""codAOO"":""COM-TA""},{""id"":""CS"",""descrizione"":""COMANDO VV.F. COSENZA"",""codAOO"":""COM-CS""},{""id"":""CZ"",""descrizione"":""COMANDO VV.F. CATANZARO"",""codAOO"":""COM-CZ""},{""id"":""KR"",""descrizione"":""COMANDO VV.F. CROTONE"",""codAOO"":""COM-KR""},{""id"":""RC"",""descrizione"":""COMANDO VV.F. REGGIO CALABRIA"",""codAOO"":""COM-RC""},{""id"":""VV"",""descrizione"":""COMANDO VV.F. VIBO VALENTIA"",""codAOO"":""COM-VV""},{""id"":""CA"",""descrizione"":""COMANDO VV.F. CAGLIARI"",""codAOO"":""COM-CA""},{""id"":""NU"",""descrizione"":""COMANDO VV.F. NUORO"",""codAOO"":""COM-NU""},{""id"":""OR"",""descrizione"":""COMANDO VV.F. ORISTANO"",""codAOO"":""COM-OR""},{""id"":""SS"",""descrizione"":""COMANDO VV.F. SASSARI"",""codAOO"":""COM-SS""},{""id"":""AG"",""descrizione"":""COMANDO VV.F. AGRIGENTO"",""codAOO"":""COM-AG""},{""id"":""CL"",""descrizione"":""COMANDO VV.F. CALTANISSETTA"",""codAOO"":""COM-CL""},{""id"":""CT"",""descrizione"":""COMANDO VV.F. CATANIA"",""codAOO"":""COM-CT""},{""id"":""EN"",""descrizione"":""COMANDO VV.F. ENNA"",""codAOO"":""COM-EN""},{""id"":""ME"",""descrizione"":""COMANDO VV.F. MESSINA"",""codAOO"":""COM-ME""},{""id"":""PA"",""descrizione"":""COMANDO VV.F. PALERMO"",""codAOO"":""COM-PA""},{""id"":""RG"",""descrizione"":""COMANDO VV.F. RAGUSA"",""codAOO"":""COM-RG""},{""id"":""SR"",""descrizione"":""COMANDO VV.F. SIRACUSA"",""codAOO"":""COM-SR""},{""id"":""TP"",""descrizione"":""COMANDO VV.F. TRAPANI"",""codAOO"":""COM-TP""},{""id"":""MT"",""descrizione"":""COMANDO VV.F. MATERA"",""codAOO"":""COM-MT""},{""id"":""PZ"",""descrizione"":""COMANDO VV.F. POTENZA"",""codAOO"":""COM-PZ""},{""id"":""AQ"",""descrizione"":""COMANDO VV.F. L'AQUILA"",""codAOO"":""COM-AQ""},{""id"":""CH"",""descrizione"":""COMANDO VV.F. CHIETI"",""codAOO"":""COM-CH""},{""id"":""PE"",""descrizione"":""COMANDO VV.F. PESCARA"",""codAOO"":""COM-PE""},{""id"":""TE"",""descrizione"":""COMANDO VV.F. TERAMO"",""codAOO"":""COM-TE""},{""id"":""CB"",""descrizione"":""COMANDO VV.F. CAMPOBASSO"",""codAOO"":""COM-CB""},{""id"":""IS"",""descrizione"":""COMANDO VV.F. ISERNIA"",""codAOO"":""COM-IS""}]";
            return Ok(result);
        }
    }
}

