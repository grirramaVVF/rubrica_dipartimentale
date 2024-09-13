using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiRubricaDipartimentale.Models.Rubrica
{ 
    public class ContattoHasUfficio
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("Contatto")]
        public int IdContatto { get; set; }

        [ForeignKey("Ufficio")]
        public int IdUfficio { get; set; }
        public bool IsResponsabile { get; set; }
        public string Compito { get; set; }
    }
}
