import {MigrationInterface, QueryRunner} from "typeorm";

export class AddMultiCabOption1560484572576 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            UPDATE wrf.question SET \`grouping\` = 1 where short_name = 'cab_mt';
        `);
        await queryRunner.query(`
            UPDATE wrf.question SET \`grouping\` = 2 where short_name = 'cab_height';
        `);
        await queryRunner.query(`
            INSERT INTO wrf.question (text, short_name, topic, tooltip, instructions, datatype, is_active, created_by, updated_by, cat_fk, \`grouping\`)
            VALUES
                ('Length', 'cab_lngth_2', 'length', 'enter a length', '', 'number', 1, 'admin', 'admin', 10, 3),
                ('Width', 'cab_wdth_2', 'width', 'enter a width', '', 'number', 1, 'admin', 'admin', 10, 3),
                ('Height', 'cab_height_2', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', 10, 3);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
