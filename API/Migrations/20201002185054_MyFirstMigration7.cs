using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Migrations
{
    public partial class MyFirstMigration7 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Subscriptions_Plans_PlanId",
                table: "Subscriptions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Subscriptions",
                table: "Subscriptions");

            migrationBuilder.RenameTable(
                name: "Subscriptions",
                newName: "PlanSubscriptions");

            migrationBuilder.RenameIndex(
                name: "IX_Subscriptions_PlanId",
                table: "PlanSubscriptions",
                newName: "IX_PlanSubscriptions_PlanId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_PlanSubscriptions",
                table: "PlanSubscriptions",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_PlanSubscriptions_Plans_PlanId",
                table: "PlanSubscriptions",
                column: "PlanId",
                principalTable: "Plans",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PlanSubscriptions_Plans_PlanId",
                table: "PlanSubscriptions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_PlanSubscriptions",
                table: "PlanSubscriptions");

            migrationBuilder.RenameTable(
                name: "PlanSubscriptions",
                newName: "Subscriptions");

            migrationBuilder.RenameIndex(
                name: "IX_PlanSubscriptions_PlanId",
                table: "Subscriptions",
                newName: "IX_Subscriptions_PlanId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Subscriptions",
                table: "Subscriptions",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Subscriptions_Plans_PlanId",
                table: "Subscriptions",
                column: "PlanId",
                principalTable: "Plans",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
