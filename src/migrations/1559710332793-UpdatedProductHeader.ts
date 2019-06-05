import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdatedProductHeader1559710332793 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `product_header` ADD `notes` varchar(2000) NOT NULL DEFAULT ''");
        await queryRunner.query("ALTER TABLE `product_header` ADD `reference_number` varchar(255) NOT NULL DEFAULT ''");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `product_header` DROP COLUMN `reference_number`");
        await queryRunner.query("ALTER TABLE `product_header` DROP COLUMN `notes`");
    }

}
