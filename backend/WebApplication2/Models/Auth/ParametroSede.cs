using System.ComponentModel.DataAnnotations;

namespace ApiRubricaDipartimentale.Models.Auth
{
    public class ParametroSede
    {
        [Key]
        public int IdParametro { get; set; }

        /* CodiceSede rappresenta IdSede in WAUC */
        public string CodiceSede { get; set; }
        public string Nome { get; set; }
        public string JsonValori { get; set; }
    }
}
