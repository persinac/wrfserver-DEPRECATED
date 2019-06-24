import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertAddOns1561396312529 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            update wrf.question set datatype = 'string' where short_name in ('ftr_wr', 'ftr_pot');
        `);
        await queryRunner.query(`
        INSERT INTO wrf.question (text, short_name, topic, tooltip, instructions, datatype, is_active, created_by, updated_by, cat_fk, \`grouping\`, unique_dim)
        VALUES
            ('Utensil', 'ftr_utn', '', 'utensils', '', 'string', 1, 'admin', 'admin', 2, 3, ''),
            ('Outlet Cut Out', 'ftr_oco', '', 'outlet cut out', '', 'boolean', 1, 'admin', 'admin', 2, 4, ''),
            ('3\" Spice Rack', 'ftr_spr', '', 'spice rack', '', 'string', 1, 'admin', 'admin', 2, 5, ''),
            ('Knife', 'ftr_knf', '', 'knife block', '', 'string', 1, 'admin', 'admin', 2, 6, ''),
            ('Cutlery', 'ftr_cly', '', 'cutlery', '', 'string', 1, 'admin', 'admin', 2, 7, ''),
            ('Appliance Lift', 'ftr_applft', '', 'appliance lift', '', 'boolean', 1, 'admin', 'admin', 2, 8, ''),
            ('Open end shelf + 2 legs', 'ftr_os2l', '', 'open end shelf and 2 legs', '', 'boolean', 1, 'admin', 'admin', 2, 9, ''),
            ('Open end shelf + 3 legs', 'ftr_os3l', '', 'open end shelf and 3 legs', '', 'boolean', 1, 'admin', 'admin', 2, 10, ''),
            ('Table legs + skirt', 'ftr_tls', '', 'table legs and skirt', '', 'boolean', 1, 'admin', 'admin', 2, 11, '');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            delete from question 
            where unique_dim in (
                'ftr_utn','ftr_oco','ftr_spr',
                'ftr_knf','ftr_cly','ftr_applft',
                'ftr_os2l','ftr_os3l','ftr_tls'
            );
        `);
    }

}
