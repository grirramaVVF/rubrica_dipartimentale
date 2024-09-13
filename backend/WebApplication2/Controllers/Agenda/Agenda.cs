using Microsoft.AspNetCore.Mvc;

namespace ApiRubricaDipartimentale.Controllers.Agenda
{
    [ApiController]
    [Route("api/Agenda/[controller]")]
    public class AgendaController : ControllerBase
    {

        [HttpGet("GetAppuntamentiDellUfficioDaA")]
        public IActionResult GetAppuntamentiDellUfficioDaA([FromQuery] int IdUfficio, [FromQuery] DateOnly Da, [FromQuery] DateOnly A)
        {
            var appointments = new List<string> { "Appointment1", "Appointment2" }; // Simulated data
            return Ok(appointments);
        }

        [HttpGet("GetAppuntamentiDelFunzionarioDaA")]
        public IActionResult GetAppuntamentiDelFunzionarioDaA([FromQuery] int IdUtente, [FromQuery] DateOnly Da, [FromQuery] DateOnly A)
        {
            var appointments = new List<string> { "Appointment1", "Appointment2" }; // Simulated data
            return Ok(appointments);
        }

    }
}



