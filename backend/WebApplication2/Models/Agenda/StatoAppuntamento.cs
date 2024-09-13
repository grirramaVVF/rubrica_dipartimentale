using System.ComponentModel.DataAnnotations;

namespace ApiRubricaDipartimentale.Models.Agenda
{
    public class StatoAppuntamento
    {
        [Key]
        public int IdStato { get; set; }
        public string Descrizione { get; set; }
    }

}
