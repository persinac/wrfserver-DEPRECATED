import {MigrationInterface, QueryRunner} from "typeorm";

export class DrawersAddition1561247016596 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            update wrf.question set short_name = 'dwr_quantity' where short_name = 'dwr_qty';
        `);
        await queryRunner.query(`
            update wrf.question set unique_dim = 'dwr_1' where short_name in ('dwr_lngth', 'dwr_wdth', 'dwr_height');
        `);
        await queryRunner.query(`
        INSERT INTO wrf.question (text, short_name, topic, tooltip, instructions, datatype, is_active, created_by, updated_by, cat_fk, \`grouping\`, unique_dim)
        VALUES
            ('Length', 'dwr_lngth_2', 'length', 'enter a length', '', 'number', 1, 'admin', 'admin', 12, 3, 'dwr_2'),
            ('Width', 'dwr_wdth_2', 'width', 'enter a width', '', 'number', 1, 'admin', 'admin', 12, 3, 'dwr_2'),
            ('Height', 'dwr_height_2', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', 12, 3, 'dwr_2'),
            ('Length', 'dwr_lngth_3', 'length', 'enter a length', '', 'number', 1, 'admin', 'admin', 12, 4, 'dwr_3'),
            ('Width', 'dwr_wdth_3', 'width', 'enter a width', '', 'number', 1, 'admin', 'admin', 12, 4, 'dwr_3'),
            ('Height', 'dwr_height_3', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', 12, 4, 'dwr_3'),
            ('Length', 'dwr_lngth_4', 'length', 'enter a length', '', 'number', 1, 'admin', 'admin', 12, 5, 'dwr_4'),
            ('Width', 'dwr_wdth_4', 'width', 'enter a width', '', 'number', 1, 'admin', 'admin', 12, 5, 'dwr_4'),
            ('Height', 'dwr_height_4', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', 12, 5, 'dwr_4');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
        delete from question where unique_dim in ('dwr_2','dwr_3','dwr_4');
        `);
        await queryRunner.query(`
            update wrf.question set short_name = 'dwr_qty' where short_name = 'dwr_quantity';
        `);
        await queryRunner.query(`
            update wrf.question set unique_dim = '' where short_name in ('dwr_lngth', 'dwr_wdth', 'dwr_height');
        `);
    }
}
