using Microsoft.AspNetCore.Mvc;

using ApiRubricaDipartimentale.Models.Auth;
using Microsoft.AspNetCore.Authorization;
using ApiRubricaDipartimentale.Models.Responses;
using Swashbuckle.AspNetCore.Annotations;
using Microsoft.EntityFrameworkCore;
using ApiRubricaDipartimentale.Data;

namespace ApiRubricaDipartimentale.Controllers.Auth
{
 
    
    [ApiController]
    [Route("api/Auth/[controller]")]
    public class UtenteVvfHasRuoliController : ControllerBase
    {

        private readonly ApplicationDbContext _db_context;

        public UtenteVvfHasRuoliController(ApplicationDbContext db_context)
        {
            _db_context = db_context;
        }

        // ###########################################################################
        // ------------------------------ Metodi CRUD --------------------------------
        // * Create
        // * Read
        // * Update
        // * Delete
        // * GetLista
        // ###########################################################################

        [HttpPost("Create")]
        [Authorize]

        [SwaggerResponse(200, "Item retrieved successfully", typeof(List<UtenteVvfHasRuoli>))]
        [SwaggerResponse(400, "Invalid request", typeof(ErrorResponse))]
        [SwaggerResponse(401, "Unauthorized", typeof(ErrorResponse))]
        [SwaggerResponse(500, "InternalServerError", typeof(ErrorResponse))]
        public IActionResult Create([FromBody] UtenteVvfHasRuoli assegnazione)
        {
            if (assegnazione == null)
            {
                return BadRequest();
            }

            try
            {
                _db_context.UtenteVvfHasRuoli.Add(assegnazione);
                _db_context.SaveChanges();

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, new ErrorResponse { Success = false, Message = ex.Message });
            }
        }

        [HttpGet("Read")]
        [Authorize]

        [SwaggerResponse(200, "Item retrieved successfully", typeof(List<UtenteVvfHasRuoli>))]
        [SwaggerResponse(400, "Invalid request", typeof(ErrorResponse))]
        [SwaggerResponse(401, "Unauthorized", typeof(ErrorResponse))]
        [SwaggerResponse(500, "InternalServerError", typeof(ErrorResponse))]
        public IActionResult Read([FromQuery] int Id)
        {
            if (Id == null)
            {
                return BadRequest();
            }

            try
            {
                var lista = _db_context.UtenteVvfHasRuoli
                .Where(up => up.Id == Id)
                .ToList();
                return Ok(lista);

            }
            catch (Exception ex)
            {
                return StatusCode(500, new ErrorResponse { Success = false, Message = ex.Message });
            }
        }

        [HttpPut("Update")]
        [Authorize]

        [SwaggerResponse(200, "Item retrieved successfully", typeof(List<UtenteVvfHasRuoli>))]
        [SwaggerResponse(400, "Invalid request", typeof(ErrorResponse))]
        [SwaggerResponse(401, "Unauthorized", typeof(ErrorResponse))]
        [SwaggerResponse(404, "Not Found", typeof(ErrorResponse))]
        [SwaggerResponse(500, "InternalServerError", typeof(ErrorResponse))]
        public IActionResult Update([FromBody] UtenteVvfHasRuoli assegnazione)
        {
            if (assegnazione == null || assegnazione.Id == 0)
            {
                return BadRequest();
            }

            try
            {
                var assegnazione_esistente = _db_context.UtenteVvfHasRuoli.SingleOrDefault(up => up.Id == assegnazione.Id);
                if (assegnazione_esistente == null)
                {
                    return NotFound();
                }

                assegnazione_esistente.IdUtente = assegnazione.IdUtente;
                assegnazione_esistente.IdRuolo = assegnazione.IdRuolo;
                assegnazione_esistente.IdSede = assegnazione.IdSede;
                assegnazione_esistente.IdUfficio = assegnazione.IdUfficio;

                _db_context.UtenteVvfHasRuoli.Update(assegnazione_esistente);
                _db_context.SaveChanges();

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, new ErrorResponse { Success = false, Message = ex.Message });
            }
        }

        [HttpDelete("Delete")]
        [Authorize]

        [SwaggerResponse(200, "Item retrieved successfully", typeof(List<UtenteVvfHasRuoli>))]
        [SwaggerResponse(400, "Invalid request", typeof(ErrorResponse))]
        [SwaggerResponse(401, "Unauthorized", typeof(ErrorResponse))]
        [SwaggerResponse(404, "Not Found", typeof(ErrorResponse))]
        [SwaggerResponse(500, "InternalServerError", typeof(ErrorResponse))]
        public IActionResult Delete([FromQuery] int Id)
        {
            if (Id == null)
            {
                return BadRequest();
            }

            try
            {
                var assegnazione = _db_context.UtenteVvfHasRuoli.SingleOrDefault(up => up.Id == Id);
                if (assegnazione == null)
                {
                    return NotFound();
                }

                _db_context.UtenteVvfHasRuoli.Remove(assegnazione);
                _db_context.SaveChanges();

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, new ErrorResponse { Success = false, Message = ex.Message });
            }
        }

        [HttpGet("GetLista")]
        [Authorize]

        [SwaggerResponse(200, "Item retrieved successfully", typeof(List<UtenteVvfHasRuoli>))]
        [SwaggerResponse(401, "Unauthorized", typeof(ErrorResponse))]
        [SwaggerResponse(500, "InternalServerError", typeof(ErrorResponse))]
        public IActionResult GetLista()
        {
            try
            {
                var lista = _db_context.UtenteVvfHasRuoli.ToList();
                return Ok(lista);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new ErrorResponse { Success = false, Message = ex.Message });
            }
        }

        // ###########################################################################
        // ------------------------------ Altre Chiamate -----------------------------
        // * GetUtentiDiSedeBySede
        // * GetFunzionariPrevenzioneBySede
        // * GetAddettiUfficioPrevenzioneBySede
        // * GetSuperUsers
        // * GetRuoliByCodiceFiscale
        // ###########################################################################

        [HttpGet("GetUtentiDiSedeBySede")]
        [Authorize]

        [SwaggerResponse(200, "Item retrieved successfully", typeof(List<UtenteVvfHasRuoli>))]
        [SwaggerResponse(400, "Invalid request", typeof(ErrorResponse))]
        [SwaggerResponse(401, "Unauthorized", typeof(ErrorResponse))]
        [SwaggerResponse(500, "InternalServerError", typeof(ErrorResponse))]
        public IActionResult GetUtentiDiSedeBySede([FromQuery] string IdSede)
        {
            if (IdSede == null)
            {
                return BadRequest();
            }

            try
            {
                return Ok(GetByRuoloESede(Ruolo.UTENTE_DI_SEDE, IdSede));
            }
            catch (Exception ex)
            {
                return StatusCode(500, new ErrorResponse { Success = false, Message = ex.Message });
            }

        }


        [HttpGet("GetFunzionariPrevenzioneBySede")]
        [Authorize]

        [SwaggerResponse(200, "Item retrieved successfully", typeof(List<UtenteVvfHasRuoli>))]
        [SwaggerResponse(400, "Invalid request", typeof(ErrorResponse))]
        [SwaggerResponse(401, "Unauthorized", typeof(ErrorResponse))]
        [SwaggerResponse(500, "InternalServerError", typeof(ErrorResponse))]
        public IActionResult GetFunzionariPrevenzioneBySede([FromQuery] string IdSede)
        {
            if (IdSede == null)
            {
                return BadRequest();
            }

            try
            {
                return Ok(GetByRuoloESede(Ruolo.FUNZIONARIO_PREVENZIONE, IdSede));
            }
            catch (Exception ex)
            {
                return StatusCode(500, new ErrorResponse { Success = false, Message = ex.Message });
            }
        }


        [HttpGet("GetAddettiUfficioPrevenzioneBySede")]
        [Authorize]

        [SwaggerResponse(200, "Item retrieved successfully", typeof(List<UtenteVvfHasRuoli>))]
        [SwaggerResponse(400, "Invalid request", typeof(ErrorResponse))]
        [SwaggerResponse(401, "Unauthorized", typeof(ErrorResponse))]
        [SwaggerResponse(500, "InternalServerError", typeof(ErrorResponse))]
        public IActionResult GetAddettiUfficioPrevenzioneBySede([FromQuery] string IdSede)
        {
            if (IdSede == null)
            {
                return BadRequest();
            }

            try
            {
                return Ok(GetByRuoloESede(Ruolo.UFFICIO_PREVENZIONE_INCENDI, IdSede));
            }
            catch (Exception ex)
            {
                return StatusCode(500, new ErrorResponse { Success = false, Message = ex.Message });
            }
        }


        [HttpGet("GetSuperUsers")]
        [Authorize]

        [SwaggerResponse(200, "Item retrieved successfully", typeof(List<UtenteVvfHasRuoli>))]
        [SwaggerResponse(400, "Invalid request", typeof(ErrorResponse))]
        [SwaggerResponse(401, "Unauthorized", typeof(ErrorResponse))]
        [SwaggerResponse(500, "InternalServerError", typeof(ErrorResponse))]
        public IActionResult GetSuperUsers()
        {
            try
            {
                var utenti = (from up in _db_context.UtenteVvfHasRuoli
                              join UtenteVvf in _db_context.UtentiVvf on up.IdUtente equals UtenteVvf.IdUtente
                              where up.IdRuolo == Ruolo.SUPER_USER
                              select new UtenteVvf { }
                              ).ToList();

                return Ok(utenti);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new ErrorResponse { Success = false, Message = ex.Message });
            }
        }


        [HttpGet("GetRuoliByUsernameDipvvf")]
        [Authorize]

        [SwaggerResponse(200, "Item retrieved successfully", typeof(List<UtenteVvfHasRuoli>))]
        [SwaggerResponse(400, "Invalid request", typeof(ErrorResponse))]
        [SwaggerResponse(401, "Unauthorized", typeof(ErrorResponse))]
        [SwaggerResponse(500, "InternalServerError", typeof(ErrorResponse))]
        public IActionResult GetRuoliByUsernameDipvvf([FromQuery] string UsernameDipvvf)
        {
            if (UsernameDipvvf == null)
            {
                return BadRequest();
            }
            try
            {
                var ruoli_e_sedi = (from up in _db_context.UtenteVvfHasRuoli
                                    join Ruolo in _db_context.Ruoli on up.IdRuolo equals Ruolo.IdRuolo
                                    join UtenteVvf in _db_context.UtentiVvf on up.IdUtente equals UtenteVvf.IdUtente
                                    where UtenteVvf.UsernameDipvvf == UsernameDipvvf
                                    select new 
                                    {
                                        nome_ruolo = Ruolo.DescrizioneRuolo,
                                        codice_sede = up.IdSede
                                    }).ToList();

                return Ok(ruoli_e_sedi);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new ErrorResponse { Success = false, Message = ex.Message });
            }
        }


        // ###########################################################################
        // ------------------------------ Metodi privati -----------------------------
        // * GetByRuoloESede
        // ###########################################################################
        private List<UtenteVvf> GetByRuoloESede(int IdRuolo, string IdSede)
        {
            var utenti = (from up in _db_context.UtenteVvfHasRuoli
                                  join UtenteVvf in _db_context.UtentiVvf on up.IdUtente equals UtenteVvf.IdUtente
                                  where up.IdRuolo == IdRuolo && up.IdSede == IdSede
                                  select new UtenteVvf{}
                                  ).ToList();

            return utenti;
        }

    }

}




