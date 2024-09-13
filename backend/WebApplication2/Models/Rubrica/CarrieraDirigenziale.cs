using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiRubricaDipartimentale.Models.Rubrica
{ 
    public class CarrieraDirigenziale
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("TipologiaCarriera")]
        public int IdTipologiaCarriera { get; set; }

        public string Nome { get; set; }
        public string Descrizione { get; set; }
        public string Colore { get; set; }
    }
}
