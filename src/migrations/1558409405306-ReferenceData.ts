import {MigrationInterface, QueryRunner} from "typeorm";

export class ReferenceData1558409405306 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `reference_keys` (`rk_id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `is_active` tinyint NOT NULL, `created_on` datetime NOT NULL, `created_by` varchar(255) NOT NULL, `updated_on` datetime NOT NULL, `updated_by` varchar(255) NOT NULL, PRIMARY KEY (`rk_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `reference_data` (`rd_id` int NOT NULL AUTO_INCREMENT, `is_active` tinyint NOT NULL, `created_on` datetime NOT NULL, `created_by` varchar(255) NOT NULL, `updated_on` datetime NOT NULL, `updated_by` varchar(255) NOT NULL, `rkFkRkId` int NULL, PRIMARY KEY (`rd_id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `product_header` CHANGE `group_id` `group_id` int NOT NULL");
        await queryRunner.query("ALTER TABLE `product_header` CHANGE `order_num` `order_num` int NOT NULL");
        await queryRunner.query("ALTER TABLE `product_header` CHANGE `customer_fk` `customer_fk` int NOT NULL");
        await queryRunner.query("ALTER TABLE `product_header` CHANGE `state` `state` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `reference_data` ADD CONSTRAINT `FK_34587cd49f3956eeb6b596f07fb` FOREIGN KEY (`rkFkRkId`) REFERENCES `reference_keys`(`rk_id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `reference_data` DROP FOREIGN KEY `FK_34587cd49f3956eeb6b596f07fb`");
        await queryRunner.query("ALTER TABLE `product_header` CHANGE `state` `state` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `product_header` CHANGE `customer_fk` `customer_fk` int NULL");
        await queryRunner.query("ALTER TABLE `product_header` CHANGE `order_num` `order_num` int NULL");
        await queryRunner.query("ALTER TABLE `product_header` CHANGE `group_id` `group_id` int NULL");
        await queryRunner.query("DROP TABLE `reference_data`");
        await queryRunner.query("DROP TABLE `reference_keys`");
    }

}
