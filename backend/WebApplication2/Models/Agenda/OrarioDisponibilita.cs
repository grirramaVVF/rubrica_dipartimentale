using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiRubricaDipartimentale.Models.Agenda
{
    public class OrarioDisponibilita
    {
        [Key]
        public int IdOrario { get; set; }
        
        [ForeignKey("UtenteVvf")]
        public int IdUtente { get; set; }
        
        public DateOnly DataDisponibilita { get; set; }
        public TimeOnly OraInizio { get; set; }
        public TimeOnly OraFine { get; set; }
        public DateTime DataUltimaModifica { get; set; }
    }

}


