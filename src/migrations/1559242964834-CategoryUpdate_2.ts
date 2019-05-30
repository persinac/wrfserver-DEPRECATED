import {MigrationInterface, QueryRunner} from "typeorm";

export class CategoryUpdate21559242964834 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `category` ADD `belongs_to` int NULL");
        await queryRunner.query("ALTER TABLE `question` DROP FOREIGN KEY `FK_e37199275c0b6bdef369e7fb1ad`");
        await queryRunner.query("ALTER TABLE `question` CHANGE `cat_fk` `cat_fk` int NOT NULL");
        await queryRunner.query("ALTER TABLE `question` ADD CONSTRAINT `FK_e37199275c0b6bdef369e7fb1ad` FOREIGN KEY (`cat_fk`) REFERENCES `category`(`category_id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `question` DROP FOREIGN KEY `FK_e37199275c0b6bdef369e7fb1ad`");
        await queryRunner.query("ALTER TABLE `question` CHANGE `cat_fk` `cat_fk` int NULL");
        await queryRunner.query("ALTER TABLE `question` ADD CONSTRAINT `FK_e37199275c0b6bdef369e7fb1ad` FOREIGN KEY (`cat_fk`) REFERENCES `category`(`category_id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `category` DROP COLUMN `belongs_to`");
    }

}
