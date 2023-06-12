import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProductsTable1686336519614 implements MigrationInterface {
    name = 'CreateProductsTable1686336519614'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "name" character varying(300) NOT NULL, "price" character varying(300) NOT NULL, "brand" character varying(300) NOT NULL, "image" character varying(300) NOT NULL, "createdAt" date NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
