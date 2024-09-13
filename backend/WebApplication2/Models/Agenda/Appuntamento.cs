using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiRubricaDipartimentale.Models.Agenda
{
    public class Appuntamento
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("StatoAppuntamento")]
        public int IdStato { get; set; }

        [ForeignKey("UtenteVvf")]
        public int idFunzionarioRichiesto { get; set; }

        public DateOnly DataAppuntamento { get; set; }
        public TimeOnly OraAppuntanemto { get; set; }

        public string Note { get; set; }
        public string NominativoRichiedente { get; set; }
        public string EmailRichiedente { get; set; }
        public string TelefonoRichiedente { get; set; }
        public DateOnly dataUltimaModifica { get; set; }

    }

}
