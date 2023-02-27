using System;
using System.Collections.Generic;
using Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Repository
{
    public partial class CharityContext : DbContext
    {
        public CharityContext()
        {
        }

        public CharityContext(DbContextOptions<CharityContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Category> Categories { get; set; } = null!;
        public virtual DbSet<Charity> Charities { get; set; } = null!;
        public virtual DbSet<City> Cities { get; set; } = null!;
        public virtual DbSet<Loan> Loans { get; set; } = null!;
        public virtual DbSet<Status> Statuses { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=SRV2\\PUPILS;Database=Charity;Trusted_Connection=True;");
                //@"Data Source=SRV2\PUPILS;Initial Catalog=DataBaseIsEnoing;Integrated Security=True; TrustServerCertificate=True;";
                //"Data Source=srv2\\pupils;Initial Catalog=DataBaseIsEnoing;Integrated Security=True;Persist Security Info=False;Pooling=False;MultipleActiveResultSets=False;Encrypt=False;TrustServerCertificate=False"
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>(entity =>
            {
                entity.ToTable("CATEGORY");

                entity.Property(e => e.CategoryName).HasMaxLength(50);

                entity.Property(e => e.ImageUrl).HasMaxLength(50);
            });

            modelBuilder.Entity<Charity>(entity =>
            {
                entity.ToTable("CHARITY");

                entity.Property(e => e.CharityDesc).HasMaxLength(500);

                entity.Property(e => e.CharityName).HasMaxLength(50);

                entity.Property(e => e.Neighborhood).HasMaxLength(100);

                entity.Property(e => e.Phone).HasMaxLength(50);

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Charities)
                    .HasForeignKey(d => d.CategoryId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CHARITY_CATEGORY");

                entity.HasOne(d => d.City)
                    .WithMany(p => p.Charities)
                    .HasForeignKey(d => d.CityId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CHARITY_CITY");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Charities)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CHARITY_USER");
            });

            modelBuilder.Entity<City>(entity =>
            {
                entity.ToTable("CITY");

                entity.Property(e => e.CityName).HasMaxLength(100);
            });

            modelBuilder.Entity<Loan>(entity =>
            {
                entity.ToTable("LOAN");

                entity.Property(e => e.LoanId).ValueGeneratedNever();

                entity.Property(e => e.ItemName).HasMaxLength(50);

                entity.Property(e => e.LoanDate).HasColumnType("date");

                entity.Property(e => e.ReturnDate).HasColumnType("date");

                //entity.HasOne(d => d.Charity)
                //    .WithMany(p => p.Loans)
                //    .HasForeignKey(d => d.CharityId)
                //    .OnDelete(DeleteBehavior.ClientSetNull)
                //    .HasConstraintName("FK_LOAN_CHARITY");

                //entity.HasOne(d => d.Status)
                //    .WithMany(p => p.Loans)
                //    .HasForeignKey(d => d.StatusId)
                //    .OnDelete(DeleteBehavior.ClientSetNull)
                //    .HasConstraintName("FK_LOAN_STATUS");
            });

            modelBuilder.Entity<Status>(entity =>
            {
                entity.ToTable("STATUS");

                entity.Property(e => e.StatusName).HasMaxLength(50);
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("USER");

                entity.Property(e => e.FirstName).HasMaxLength(50);

                entity.Property(e => e.LastName).HasMaxLength(50);

                entity.Property(e => e.Password).HasMaxLength(50);

                entity.Property(e => e.UserName).HasMaxLength(50);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
