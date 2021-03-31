import { MigrationInterface, QueryRunner, Table } from "typeorm";

const tableName = "specifications";

export class CreateSpecifications1617198484860 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: tableName,
      columns: [
        {
          name: "id",
          type: "uuid",
          isPrimary: true,
        },
        {
          name: "name",
          type: "varchar",
        },
        {
          name: "description",
          type: "varchar",
        },
        {
          name: "created_at",
          type: "timestamp",
          default: "now()",
        },
      ],
    });

    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(tableName);
  }
}
