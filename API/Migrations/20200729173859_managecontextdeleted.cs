using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Migrations
{
    public partial class managecontextdeleted : Migration
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
                name: "Users",
                columns: table => new
                {
                    UserID = table.Column<Guid>(nullable: false),
                    Emailaddress = table.Column<string>(nullable: true),
                    Phone = table.Column<string>(nullable: true),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserID);
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

            migrationBuilder.CreateTable(
                name: "CompanyUserPermissions",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CompanyId = table.Column<Guid>(nullable: false),
                    UserId = table.Column<Guid>(nullable: false),
                    PlanId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CompanyUserPermissions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CompanyUserPermissions_Companys_CompanyId",
                        column: x => x.CompanyId,
                        principalTable: "Companys",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CompanyUserPermissions_Plans_PlanId",
                        column: x => x.PlanId,
                        principalTable: "Plans",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CompanyUserPermissions_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CompanyUserPermissions_CompanyId",
                table: "CompanyUserPermissions",
                column: "CompanyId");

            migrationBuilder.CreateIndex(
                name: "IX_CompanyUserPermissions_PlanId",
                table: "CompanyUserPermissions",
                column: "PlanId");

            migrationBuilder.CreateIndex(
                name: "IX_CompanyUserPermissions_UserId",
                table: "CompanyUserPermissions",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_StoreBalances_ProductsId",
                table: "StoreBalances",
                column: "ProductsId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CompanyUserPermissions");

            migrationBuilder.DropTable(
                name: "IssueProducts");

            migrationBuilder.DropTable(
                name: "RecieveProducts");

            migrationBuilder.DropTable(
                name: "StoreBalances");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Products");
        }
    }
}
