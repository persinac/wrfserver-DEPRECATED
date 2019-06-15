import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUniqueDimToQuestion1560486436394 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `question` ADD `unique_dim` varchar(255) NOT NULL DEFAULT ''");
        await queryRunner.query(`
            UPDATE wrf.question SET unique_dim = 'cab_2' where short_name in ('cab_height_2', 'cab_lngth_2', 'cab_wdth_2');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `question` DROP COLUMN `unique_dim`");
    }

}

/***
 OTHER QUERIES

 INSERT INTO wrf.question (text, short_name, topic, tooltip, instructions, datatype, is_active, created_by, updated_by, cat_fk, `grouping`, unique_dim)
 VALUES
 ('Length', 'cab_lngth_3', 'length', 'enter a length', '', 'number', 1, 'admin', 'admin', 10, 4, 'cab_3'),
 ('Width', 'cab_wdth_3', 'width', 'enter a width', '', 'number', 1, 'admin', 'admin', 10, 4, 'cab_3'),
 ('Height', 'cab_height_3', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', 10, 4, 'cab_3'),
 ('Length', 'cab_lngth_4', 'length', 'enter a length', '', 'number', 1, 'admin', 'admin', 10, 5, 'cab_4'),
 ('Width', 'cab_wdth_4', 'width', 'enter a width', '', 'number', 1, 'admin', 'admin', 10, 5, 'cab_4'),
 ('Height', 'cab_height_4', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', 10, 5, 'cab_4');
 ****/
 