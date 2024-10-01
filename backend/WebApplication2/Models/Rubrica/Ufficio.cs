using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiRubricaDipartimentale.Models.Rubrica
{
    public class Ufficio
    {
        [Key]
        public int IdUfficio { get; set; }

        [ForeignKey("Ufficio")]
        public int IdUfficioPadre { get; set; }

        /* IdSede rappresenta IdSede in WAUC */
        public string IdSede { get; set; }
        public string Descrizione { get; set; }
        public string Telefono { get; set; }
        public string Voip { get; set; }
        public string EmailPeo { get; set; }
        public string EmailPec { get; set; }
        public string Piano { get; set; }
        public string Stanza { get; set; }
        public bool isAttivo { get; set; }
    }
}
