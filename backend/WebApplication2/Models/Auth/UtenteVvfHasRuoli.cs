using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ApiRubricaDipartimentale.Models.Auth
{
    public class UtenteVvfHasRuoli
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("UtenteVvf")]
        public int IdUtente { get; set; }

        [ForeignKey("Ruolo")]
        public int IdRuolo { get; set; }

        public string ?IdSede { get; set; }
        public int ?IdUfficio { get; set; }
    }
}
