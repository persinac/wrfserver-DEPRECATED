import {MigrationInterface, QueryRunner} from "typeorm";

export class LegsAddition1561224260367 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            update wrf.question set short_name = 'legs_quantity' where short_name = 'legs_qty';
        `);
        await queryRunner.query(`
            update wrf.question set unique_dim = 'legs_1' where short_name in ('legs_lngth', 'legs_wdth', 'legs_height');
        `);
        await queryRunner.query(`
        INSERT INTO wrf.question (text, short_name, topic, tooltip, instructions, datatype, is_active, created_by, updated_by, cat_fk, \`grouping\`, unique_dim)
        VALUES
            ('Length', 'legs_lngth_2', 'length', 'enter a length', '', 'number', 1, 'admin', 'admin', 11, 3, 'legs_2'),
            ('Width', 'legs_wdth_2', 'width', 'enter a width', '', 'number', 1, 'admin', 'admin', 11, 3, 'legs_2'),
            ('Height', 'legs_height_2', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', 11, 3, 'legs_2'),
            ('Length', 'legs_lngth_3', 'length', 'enter a length', '', 'number', 1, 'admin', 'admin', 11, 4, 'legs_3'),
            ('Width', 'legs_wdth_3', 'width', 'enter a width', '', 'number', 1, 'admin', 'admin', 11, 4, 'legs_3'),
            ('Height', 'legs_height_3', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', 11, 4, 'legs_3'),
            ('Length', 'legs_lngth_4', 'length', 'enter a length', '', 'number', 1, 'admin', 'admin', 11, 5, 'legs_4'),
            ('Width', 'legs_wdth_4', 'width', 'enter a width', '', 'number', 1, 'admin', 'admin', 11, 5, 'legs_4'),
            ('Height', 'legs_height_4', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', 11, 5, 'legs_4'),
            ('Length', 'legs_lngth_5', 'length', 'enter a length', '', 'number', 1, 'admin', 'admin', 11, 6, 'legs_5'),
            ('Width', 'legs_wdth_5', 'width', 'enter a width', '', 'number', 1, 'admin', 'admin', 11, 6, 'legs_5'),
            ('Height', 'legs_height_5', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', 11, 6, 'legs_5');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
        delete from question where unique_dim in ('legs_2','legs_3','legs_4','legs_5');
        `);
        await queryRunner.query(`
            update wrf.question set short_name = 'legs_qty' where short_name = 'legs_quantity';
        `);
        await queryRunner.query(`
            update wrf.question set unique_dim = '' where short_name in ('legs_lngth', 'legs_wdth', 'legs_height');
        `);
    }

}
