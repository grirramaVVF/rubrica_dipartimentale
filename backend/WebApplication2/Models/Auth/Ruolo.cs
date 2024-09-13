using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace ApiRubricaDipartimentale.Models.Auth
{
    public class Ruolo
    {
        public const int SUPER_USER = 1;
        public const int UTENTE_DI_SEDE = 2;
        public const int UFFICIO_PREVENZIONE_INCENDI = 3;
        public const int FUNZIONARIO_PREVENZIONE = 4;
        public const int GUEST = 5;

        [Key]
        public int IdRuolo { get; set; }

        public string DescrizioneRuolo { get; set; }

        public string AmbitoApplicativo { get; set; }

    }

}
