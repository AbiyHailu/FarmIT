using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Migrations
{
    public partial class addbaseandpestmodel2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Pests",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Companyid = table.Column<Guid>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Syptoms = table.Column<string>(nullable: true),
                    Image = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pests", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Pests_Companys_Companyid",
                        column: x => x.Companyid,
                        principalTable: "Companys",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Pests_Companyid",
                table: "Pests",
                column: "Companyid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Pests");
        }
    }
}
