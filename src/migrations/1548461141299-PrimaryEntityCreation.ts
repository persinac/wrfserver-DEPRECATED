import {MigrationInterface, QueryRunner} from "typeorm";

export class PrimaryEntityCreation1548461141299 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `category` (`category_id` int NOT NULL AUTO_INCREMENT, `category` varchar(255) NOT NULL, `is_active` tinyint NOT NULL, `created_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `created_by` varchar(255) NOT NULL, `updated_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_by` varchar(255) NOT NULL, PRIMARY KEY (`category_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `question_options` (`qo_id` int NOT NULL AUTO_INCREMENT, `text` varchar(255) NOT NULL, `sequence` int NOT NULL, `is_active` tinyint NOT NULL, `created_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `created_by` varchar(255) NOT NULL, `updated_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_by` varchar(255) NOT NULL, `q_fk` int NULL, PRIMARY KEY (`qo_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `question` (`q_id` int NOT NULL AUTO_INCREMENT, `text` varchar(255) NOT NULL, `short_name` varchar(255) NOT NULL, `topic` varchar(255) NOT NULL DEFAULT '', `tooltip` varchar(255) NOT NULL DEFAULT '', `instructions` varchar(255) NOT NULL DEFAULT '', `datatype` varchar(255) NOT NULL, `is_active` tinyint NOT NULL, `created_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `created_by` varchar(255) NOT NULL, `updated_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_by` varchar(255) NOT NULL, `cat_fk` int NULL, PRIMARY KEY (`q_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `product_details` (`pd_id` int NOT NULL AUTO_INCREMENT, `response` varchar(255) NOT NULL, `created_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `created_by` varchar(255) NOT NULL, `updated_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_by` varchar(255) NOT NULL, `ph_fk` int NULL, `cat_fk` int NULL, `q_fk` int NULL, PRIMARY KEY (`pd_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `product_header` (`ph_id` int NOT NULL AUTO_INCREMENT, `group_id` int NOT NULL, `order_num` int NOT NULL, `status` varchar(255) NOT NULL, `crafting_required` tinyint NOT NULL, `created_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `created_by` varchar(255) NOT NULL, `updated_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_by` varchar(255) NOT NULL, `customer_fk` int NULL, PRIMARY KEY (`ph_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `customer` (`customer_id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `primary_email` varchar(255) NOT NULL, `secondary_email` varchar(255) NOT NULL DEFAULT '', `phone_number` varchar(255) NOT NULL DEFAULT '', `shipping_address` varchar(255) NOT NULL DEFAULT '', `created_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `created_by` varchar(255) NOT NULL, `updated_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_by` varchar(255) NOT NULL, PRIMARY KEY (`customer_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `hardware_reference_data` (`hw_id` int NOT NULL AUTO_INCREMENT, `short_name` varchar(255) NOT NULL, `long_name` varchar(255) NOT NULL, `sku` varchar(255) NOT NULL, `is_active` tinyint NOT NULL, `created_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `created_by` varchar(255) NOT NULL, `updated_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_by` varchar(255) NOT NULL, PRIMARY KEY (`hw_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `reference_keys` (`rk_id` int NOT NULL AUTO_INCREMENT, `short_name` varchar(255) NOT NULL, `long_name` varchar(255) NOT NULL, `is_active` tinyint NOT NULL, `created_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `created_by` varchar(255) NOT NULL, `updated_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_by` varchar(255) NOT NULL, PRIMARY KEY (`rk_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `reference_data` (`rd_id` int NOT NULL AUTO_INCREMENT, `value` varchar(255) NOT NULL, `is_active` tinyint NOT NULL, `created_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `created_by` varchar(255) NOT NULL, `updated_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_by` varchar(255) NOT NULL, `rk_fk` int NULL, PRIMARY KEY (`rd_id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `question_options` ADD CONSTRAINT `FK_1eebbac5f100bfb469339272859` FOREIGN KEY (`q_fk`) REFERENCES `question`(`q_id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `question` ADD CONSTRAINT `FK_e37199275c0b6bdef369e7fb1ad` FOREIGN KEY (`cat_fk`) REFERENCES `category`(`category_id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `product_details` ADD CONSTRAINT `FK_874e94b49901c2a53fe6f602ca0` FOREIGN KEY (`ph_fk`) REFERENCES `product_header`(`ph_id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `product_details` ADD CONSTRAINT `FK_010b35a1f9a968a5d08dd4645d5` FOREIGN KEY (`cat_fk`) REFERENCES `category`(`category_id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `product_details` ADD CONSTRAINT `FK_d4c80a010b7d5bdd4c1ccefbe1b` FOREIGN KEY (`q_fk`) REFERENCES `question`(`q_id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `product_header` ADD CONSTRAINT `FK_40009ca519a9e0c7443848bb0d3` FOREIGN KEY (`customer_fk`) REFERENCES `customer`(`customer_id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `reference_data` ADD CONSTRAINT `FK_926971cfc718687a650574cbc28` FOREIGN KEY (`rk_fk`) REFERENCES `reference_keys`(`rk_id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `reference_data` DROP FOREIGN KEY `FK_926971cfc718687a650574cbc28`");
        await queryRunner.query("ALTER TABLE `product_header` DROP FOREIGN KEY `FK_40009ca519a9e0c7443848bb0d3`");
        await queryRunner.query("ALTER TABLE `product_details` DROP FOREIGN KEY `FK_d4c80a010b7d5bdd4c1ccefbe1b`");
        await queryRunner.query("ALTER TABLE `product_details` DROP FOREIGN KEY `FK_010b35a1f9a968a5d08dd4645d5`");
        await queryRunner.query("ALTER TABLE `product_details` DROP FOREIGN KEY `FK_874e94b49901c2a53fe6f602ca0`");
        await queryRunner.query("ALTER TABLE `question` DROP FOREIGN KEY `FK_e37199275c0b6bdef369e7fb1ad`");
        await queryRunner.query("ALTER TABLE `question_options` DROP FOREIGN KEY `FK_1eebbac5f100bfb469339272859`");
        await queryRunner.query("DROP TABLE `reference_data`");
        await queryRunner.query("DROP TABLE `reference_keys`");
        await queryRunner.query("DROP TABLE `hardware_reference_data`");
        await queryRunner.query("DROP TABLE `customer`");
        await queryRunner.query("DROP TABLE `product_header`");
        await queryRunner.query("DROP TABLE `product_details`");
        await queryRunner.query("DROP TABLE `question`");
        await queryRunner.query("DROP TABLE `question_options`");
        await queryRunner.query("DROP TABLE `category`");
    }

}
