import {MigrationInterface, QueryRunner} from "typeorm";

export class UpsertQuestions1562011344366 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
        INSERT INTO wrf.question (text, short_name, topic, tooltip, instructions, datatype, is_active, created_by, updated_by, cat_fk, \`grouping\`, unique_dim)
        VALUES
            ('Cabinet Size', 'cab_size', 'cabinet size', '', '', 'string', 1, 'admin', 'admin', 3, 0, '');;
        `);
        await queryRunner.query(`
            update question set unique_dim = 'custom_size' where short_name in ('total_lngth','total_depth','total_height');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
