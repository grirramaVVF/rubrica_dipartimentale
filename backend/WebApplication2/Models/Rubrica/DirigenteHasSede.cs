using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiRubricaDipartimentale.Models.Rubrica
{ 
    public class DirigenteHasSede
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("Contatto")]
        public int IdContatto { get; set; }

        /* IdSede rappresenta IdSede in WAUC */
        public bool IdSede { get; set; }

    }
}
