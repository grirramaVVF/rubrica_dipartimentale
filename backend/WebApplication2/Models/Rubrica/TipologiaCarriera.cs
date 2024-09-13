using System.ComponentModel.DataAnnotations;

namespace ApiRubricaDipartimentale.Models.Rubrica
{ 
    public class TipologiaCarriera
    {
        [Key]
        public int IdTipoCarriera { get; set; }
        public string Carriera { get; set; }
    }
}
