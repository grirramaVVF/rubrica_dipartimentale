using System.Text;
using ApiRubricaDipartimentale.Data;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using System.Data;


namespace ApiRubricaDipartimentale.Services
{
    public class TokenService
    {
        private readonly string _secretKey;
        private readonly string _issuer;

        private readonly ApplicationDbContext _db_context;

        public TokenService(string secretKey, string issuer, ApplicationDbContext db_context)
        {
            _db_context = db_context;
            _secretKey = secretKey;
            _issuer = issuer;
        }

        public string GenerateToken(string username, string password, string remoteIpAddress)
        {
            // Example validation of username and password (replace with your own validation logic)
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
            {
                throw new ArgumentException("Invalid username or password.");
            }

            // Verifica se l'utente esiste e la password è corretta (implementa una verifica di hash della password)
            var utente = _db_context.UtentiVvf
                .FirstOrDefault(u => u.UsernameDipvvf == username);

            if (utente == null)
            {
                throw new UnauthorizedAccessException("Invalid username or password.");
            }

            var ruoli_e_sedi = (from up in _db_context.UtenteVvfHasRuoli
                                join Ruolo in _db_context.Ruoli on up.IdRuolo equals Ruolo.IdRuolo
                                where up.IdUtente == utente.IdUtente
                                select new
                                {
                                    nome_ruolo = Ruolo.DescrizioneRuolo,
                                    codice_sede = up.IdSede
                                }).ToList();

            var exp = new DateTimeOffset(DateTime.Now.AddMinutes(30)).ToUnixTimeSeconds();
            var iat = new DateTimeOffset(DateTime.Now).ToUnixTimeSeconds();

            var claims = new List<Claim>
            {
                new Claim(Microsoft.IdentityModel.JsonWebTokens.JwtRegisteredClaimNames.Sub, utente.UsernameDipvvf),
                new Claim(Microsoft.IdentityModel.JsonWebTokens.JwtRegisteredClaimNames.Iss, _issuer),
                new Claim(Microsoft.IdentityModel.JsonWebTokens.JwtRegisteredClaimNames.Aud, remoteIpAddress),
                new Claim(Microsoft.IdentityModel.JsonWebTokens.JwtRegisteredClaimNames.Exp, exp.ToString()),
                new Claim(Microsoft.IdentityModel.JsonWebTokens.JwtRegisteredClaimNames.Iat, iat.ToString()),
            };

            foreach (var ruolo_sede in ruoli_e_sedi)
            {
                claims.Add(new Claim(ruolo_sede.nome_ruolo, ruolo_sede.codice_sede));
            }

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_secretKey));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}


