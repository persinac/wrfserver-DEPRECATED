import {MigrationInterface, QueryRunner} from "typeorm";

export class AddHeightToDoorsDrawersEtc1560477298298 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            INSERT INTO wrf.question (text, short_name, topic, tooltip, instructions, datatype, is_active, created_by, updated_by, cat_fk, \`grouping\`)
            VALUES
                ('Height', 'dr_height', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', 9, 3),
                ('Height', 'dwr_height', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', 12, 2),
                ('Height', 'dwrfrnts_height', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', 6, 2),
                ('Height', 'legs_height', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', 11, 2);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        // no going back on this one either
    }

}
