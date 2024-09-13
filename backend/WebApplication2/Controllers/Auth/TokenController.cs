using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

using ApiRubricaDipartimentale.Models.Requests;
using ApiRubricaDipartimentale.Models.Responses;
using ApiRubricaDipartimentale.Services;
using ApiRubricaDipartimentale.Data;


namespace ApiRubricaDipartimentale.Controllers.Auth
{
    [ApiController]
    [Route("api/Auth/[controller]")]
    public class TokenController : ControllerBase
    {
        private readonly TokenService _tokenService;
        private readonly ApplicationDbContext _db_context;

        public TokenController(IConfiguration configuration, ApplicationDbContext db_context)
        {
            var jwtSettings = configuration.GetSection("Jwt");
            _db_context = db_context;
            _tokenService = new TokenService(jwtSettings["Key"], jwtSettings["Issuer"], db_context);
        }

        [HttpPost("Create")]
        [Produces("application/json")]

        [SwaggerOperation(Summary = " Restituisce un Token per l'accesso alle API.", 
             Description = "Utente dipvvf: deve fornire username e password dipartimentali <br>" +
                           "<br><br>Esempio di Token <br>" +
                "{" +
                "<br>\"sub\": \"nome.cognome\"," +
                "<br>\"iss\": \"AppRubDip\"," +
                "<br>\"aud\": \"127.0.0.1\"," +
                "<br>\"exp\": 1719569499," +
                "<br>\"iat\": \"1719567699\"," +
                "<br>\"Utente di Sede\": \"NO\"," +
                "<br>\"Ufficio Prevenzione Incendi\": \"NO\"<br>}" +
                "<br><br>Guest: ha come username e password 'guest' <br>" +
                "<br><br>Esempio di Token <br>" +
                "{" +
                "<br>\"sub\": \"guest\"," +
                "<br>\"iss\": \"AppRubDip\"," +
                "<br>\"aud\": \"127.0.0.1\"," +
                "<br>\"exp\": 1719569499," +
                "<br>\"iat\": \"1719567699\"<br>}" 
            )]

        [SwaggerResponse(200, "Item retrieved successfully", typeof(TokenResponse))]
        [SwaggerResponse(400, "Invalid request", typeof(ErrorResponse))]
        [SwaggerResponse(401, "Unauthorized", typeof(ErrorResponse))]
        [SwaggerResponse(500, "InternalServerError", typeof(ErrorResponse))]
        public IActionResult Create( [FromBody] TokenRequest request)
        {

            var username = request.Username;
            var password = request.Password;

            try
            {
                var remoteIpAddress = HttpContext.Connection.RemoteIpAddress?.ToString();
                var token = _tokenService.GenerateToken(username, password, remoteIpAddress);
                if (!string.IsNullOrEmpty(token))
                {
                    return Ok(new TokenResponse { Success = true, Token = token });
                }
                else
                {
                    return Unauthorized(new ErrorResponse { Success = false, Message = "Sistema non autorizzato." });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, new ErrorResponse { Success = false, Message = "Errore interno all'applicazione:" + ex.Message });
            }
        }

    }

}




