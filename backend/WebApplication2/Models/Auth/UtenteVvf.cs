using System.ComponentModel.DataAnnotations;

namespace ApiRubricaDipartimentale.Models.Auth
{
    public class UtenteVvf
    {
        [Key]
        public int IdUtente { get; set; }
        public string UsernameDipvvf { get; set; }
    }

}
