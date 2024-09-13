using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiRubricaDipartimentale.Models.Auth
{
    public class RuoloHasPermessi
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("Ruolo")]
        public int IdRuolo { get; set; }


        [ForeignKey("Permesso")]
        public int IdPermesso { get; set; }

        public string Endpoint { get; set; }
        public string Metodo { get; set; }
    }
}
