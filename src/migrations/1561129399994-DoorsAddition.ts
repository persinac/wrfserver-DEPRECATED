import {MigrationInterface, QueryRunner} from "typeorm";

export class DoorsAddition1561129399994 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            update wrf.question set short_name = 'dr_quantity' where short_name = 'dr_qty';
        `);
        await queryRunner.query(`
            update wrf.question set unique_dim = 'dr_1' where short_name in ('dr_lngth', 'dr_wdth', 'dr_height');
        `);
        await queryRunner.query(`
        INSERT INTO wrf.question (text, short_name, topic, tooltip, instructions, datatype, is_active, created_by, updated_by, cat_fk, \`grouping\`, unique_dim)
        VALUES
            ('Length', 'dr_lngth_2', 'length', 'enter a length', '', 'number', 1, 'admin', 'admin', 9, 4, 'dr_2'),
            ('Width', 'dr_wdth_2', 'width', 'enter a width', '', 'number', 1, 'admin', 'admin', 9, 4, 'dr_2'),
            ('Height', 'dr_height_2', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', 9, 4, 'dr_2'),
            ('Length', 'dr_lngth_3', 'length', 'enter a length', '', 'number', 1, 'admin', 'admin', 9, 5, 'dr_3'),
            ('Width', 'dr_wdth_3', 'width', 'enter a width', '', 'number', 1, 'admin', 'admin', 9, 5, 'dr_3'),
            ('Height', 'dr_height_3', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', 9, 5, 'dr_3'),
            ('Length', 'dr_lngth_4', 'length', 'enter a length', '', 'number', 1, 'admin', 'admin', 9, 6, 'dr_4'),
            ('Width', 'dr_wdth_4', 'width', 'enter a width', '', 'number', 1, 'admin', 'admin', 9, 6, 'dr_4'),
            ('Height', 'dr_height_4', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', 9, 6, 'dr_4'),
            ('Length', 'dr_lngth_5', 'length', 'enter a length', '', 'number', 1, 'admin', 'admin', 9, 7, 'dr_5'),
            ('Width', 'dr_wdth_5', 'width', 'enter a width', '', 'number', 1, 'admin', 'admin', 9, 7, 'dr_5'),
            ('Height', 'dr_height_5', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', 9, 7, 'dr_5'),
            ('Length', 'dr_lngth_6', 'length', 'enter a length', '', 'number', 1, 'admin', 'admin', 9, 8, 'dr_6'),
            ('Width', 'dr_wdth_6', 'width', 'enter a width', '', 'number', 1, 'admin', 'admin', 9, 8, 'dr_6'),
            ('Height', 'dr_height_6', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', 9, 8, 'dr_6'),
            ('Length', 'dr_lngth_7', 'length', 'enter a length', '', 'number', 1, 'admin', 'admin', 9, 9, 'dr_7'),
            ('Width', 'dr_wdth_7', 'width', 'enter a width', '', 'number', 1, 'admin', 'admin', 9, 9, 'dr_7'),
            ('Height', 'dr_height_7', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', 9, 9, 'dr_7'),
            ('Length', 'dr_lngth_8', 'length', 'enter a length', '', 'number', 1, 'admin', 'admin', 9, 10, 'dr_8'),
            ('Width', 'dr_wdth_8', 'width', 'enter a width', '', 'number', 1, 'admin', 'admin', 9, 10, 'dr_8'),
            ('Height', 'dr_height_8', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', 9, 10, 'dr_8');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
        delete from question where unique_dim in ('dr_2','dr_3','dr_4','dr_5','dr_6','dr_7','dr_8');
        `);
        await queryRunner.query(`
            update wrf.question set short_name = 'dr_qty' where short_name = 'dr_quantity';
        `);
        await queryRunner.query(`
            update wrf.question set unique_dim = '' where short_name in ('dr_lngth', 'dr_wdth', 'dr_height');
        `);
    }

}
