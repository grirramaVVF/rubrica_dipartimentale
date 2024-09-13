using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiRubricaDipartimentale.Models.Rubrica
{
    public class Contatto
    {
        [Key]
        public int IdContatto { get; set; }

        [ForeignKey("CarrieraDiringenziale")]
        public int IdCarrieraDiringenziale { get; set; }

        public string CodiceFiscale { get; set; }
        public string Qualifica { get; set; }
        public string Nome { get; set; }
        public string Cognome { get; set; }
        public string Email { get; set; }
        public string Telefono { get; set; }
        public string Voip { get; set; }

    }

}
