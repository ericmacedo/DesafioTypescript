import { MigrationInterface, QueryRunner,  } from "typeorm";
import productsSeed from "../seeds/products.seed";
import { Product } from "../../src/products/entities/product.entity";

import * as fs from 'fs';

export class ProductSeeds1686336692488 implements MigrationInterface {
    name = 'ProductSeeds1686336692488'

    public async up(queryRunner: QueryRunner): Promise<void> {
        const products = productsSeed().map(product => {
            return queryRunner.manager.create(Product, product);
        });
        queryRunner.manager.save(products);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
