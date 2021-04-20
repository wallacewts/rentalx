import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCategories1617061544640 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: "categories",
      columns: [
        { name: "id", type: "uuid", isPrimary: true },
        { name: "name", type: "varchar" },
        { name: "description", type: "varchar" },
        { name: "created_at", type: "timestamp", default: "now()" },
      ],
    });

    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("categories");
  }
}
