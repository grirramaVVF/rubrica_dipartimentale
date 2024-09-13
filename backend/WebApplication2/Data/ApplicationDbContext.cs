using Microsoft.EntityFrameworkCore;
using ApiRubricaDipartimentale.Models.Auth;
namespace ApiRubricaDipartimentale.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Ruolo> Ruoli { get; set; }
        public DbSet<UtenteVvf> UtentiVvf { get; set; }
        public DbSet<UtenteVvfHasRuoli> UtenteVvfHasRuoli { get; set; }
        public DbSet<RuoloHasPermessi> RuoloHasPermessi { get; set; }
        public DbSet<ParametroSede> ParametriSede { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.UseSnakeCaseNamingConvention();

            modelBuilder.Entity<Ruolo>(entity =>
            {
                entity.ToTable("auth_ruoli");
            });

            modelBuilder.Entity<UtenteVvf>(entity =>
            {
                entity.ToTable("auth_utenti_vvf");
            });

            modelBuilder.Entity<Permesso>(entity =>
            {
                entity.ToTable("auth_permessi");
            });

            modelBuilder.Entity<UtenteVvfHasRuoli>(entity =>
            {
                entity.ToTable("auth_utente_vvf_has_ruoli");
            });

            modelBuilder.Entity<RuoloHasPermessi>(entity =>
            {
                entity.ToTable("auth_ruolo_has_permessi");
            });

            modelBuilder.Entity<ParametroSede>(entity =>
            {
                entity.ToTable("auth_parametri_sede");
            });

        }


    }
}
