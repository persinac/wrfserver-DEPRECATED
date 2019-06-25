import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateColorQuestions1561487315970 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const category_id = 1;
        await queryRunner.query(`
            update question set short_name = 'pnt_clr' where short_name = 'paint'
        `);
        await queryRunner.query(`
        INSERT INTO wrf.question (text, short_name, topic, tooltip, instructions, datatype, is_active, created_by, updated_by, cat_fk, \`grouping\`, unique_dim)
        VALUES
            ('Is Custom?', 'pnt_isc', 'is custom', '', '', 'boolean', 1, 'admin', 'admin', ${category_id}, 0, ''),
            ('Company Name', 'pnt_ccn', 'company name', '', '', 'string', 1, 'admin', 'admin', ${category_id}, 1, 'pnt_cus'),
            ('Color Name', 'pnt_cccr', 'color name', '', '', 'string', 1, 'admin', 'admin', ${category_id}, 2, 'pnt_cus'),
            ('Color Code', 'pnt_cccd', 'color code', '', '', 'string', 1, 'admin', 'admin', ${category_id}, 2, 'pnt_cus');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            update question set short_name = 'paint' where short_name = 'pnt_clr'
        `);
        await queryRunner.query(`
            delete from question where short_name like 'pnt_%'
        `);
    }

}
