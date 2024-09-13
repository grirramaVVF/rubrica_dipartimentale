using System.ComponentModel.DataAnnotations;

namespace ApiRubricaDipartimentale.Models.Auth
{
    public class Permesso
    {
        [Key]
        public int IdPermesso { get; set; }
        public string NomePermesso { get; set; }

    }

}
