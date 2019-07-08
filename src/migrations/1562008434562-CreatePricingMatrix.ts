import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatePricingMatrix1562008434562 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("" +
          "CREATE TABLE `ref_pricing_matrix` (`pm_id` int NOT NULL AUTO_INCREMENT, `short_name` varchar(255), `sku` varchar(255), `price` double(11,2) NOT NULL DEFAULT(0.00), `sell_price` double(11,2) NOT NULL DEFAULT(0.00), `is_active` tinyint NOT NULL, `created_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `created_by` varchar(255) NOT NULL, `updated_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_by` varchar(255) NOT NULL, PRIMARY KEY (`pm_id`)) ENGINE=InnoDB");

    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("" +
          "DROP TABLE `ref_pricing_matrix`");

    }

}
