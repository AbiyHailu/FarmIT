using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Migrations.Manager
{
    public partial class initialcreateManagerDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "IssueProducts",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ProductId = table.Column<Guid>(nullable: false),
                    IssueddeDate = table.Column<DateTime>(nullable: false),
                    Amount = table.Column<int>(nullable: false),
                    DepartmentId = table.Column<Guid>(nullable: false),
                    Reason = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IssueProducts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    ExpirationDate = table.Column<DateTime>(nullable: false),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RecieveProducts",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ProductId = table.Column<Guid>(nullable: false),
                    RecievedeDate = table.Column<DateTime>(nullable: false),
                    Amount = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RecieveProducts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "StoreBalances",
                columns: table => new
                {
                    ProductId = table.Column<Guid>(nullable: false),
                    BalanceDate = table.Column<DateTime>(nullable: false),
                    Amount = table.Column<int>(nullable: false),
                    ProductsId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StoreBalances", x => x.ProductId);
                    table.ForeignKey(
                        name: "FK_StoreBalances_Products_ProductsId",
                        column: x => x.ProductsId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_StoreBalances_ProductsId",
                table: "StoreBalances",
                column: "ProductsId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "IssueProducts");

            migrationBuilder.DropTable(
                name: "RecieveProducts");

            migrationBuilder.DropTable(
                name: "StoreBalances");

            migrationBuilder.DropTable(
                name: "Products");
        }
    }
}
