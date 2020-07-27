using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Migrations
{
    public partial class companyupdated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Emailaddress",
                table: "Companys",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "Companys",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Phone",
                table: "Companys",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserType",
                table: "Companys",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Emailaddress",
                table: "Companys");

            migrationBuilder.DropColumn(
                name: "Password",
                table: "Companys");

            migrationBuilder.DropColumn(
                name: "Phone",
                table: "Companys");

            migrationBuilder.DropColumn(
                name: "UserType",
                table: "Companys");
        }
    }
}
