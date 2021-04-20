import { MigrationInterface, QueryRunner, Table } from "typeorm";

const tableName = "users";

export class CreateUsers1617624348586 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: tableName,
      columns: [
        {
          name: "id",
          type: "uuid",
        },
        {
          name: "name",
          type: "varchar",
        },
        {
          name: "username",
          type: "varchar",
          isUnique: true,
        },
        {
          name: "password",
          type: "varchar",
        },
        {
          name: "email",
          type: "varchar",
        },
        {
          name: "driver_license",
          type: "varchar",
        },
        {
          name: "isAdmin",
          type: "boolean",
          default: false,
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
