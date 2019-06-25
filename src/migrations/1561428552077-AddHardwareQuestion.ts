import {MigrationInterface, QueryRunner} from "typeorm";

export class AddHardwareQuestion1561428552077 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            update wrf.question
            set text = 'Drawer hardware', datatype = 'string', tooltip = 'Select hardware for drawers', topic = 'Drawer hardware'
            where short_name = 'hrdwr_num'
        `);
        await queryRunner.query(`
            update wrf.question
            set short_name = 'hrdwr_drwr'
            where short_name = 'hrdwr_num'
        `);
        await queryRunner.query(`
            update wrf.question
            set text = 'Door hardware', datatype = 'string', tooltip = 'Select hardware for doors', topic = 'Door hardware'
            where short_name = 'hrdwr_sku'
        `);
        await queryRunner.query(`
            update wrf.question
            set short_name = 'hrdwr_dr'
            where short_name = 'hrdwr_sku'
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            update wrf.question
            set short_name = 'hrdwr_sku'
            where short_name = 'hrdwr_dr'
        `);
        await queryRunner.query(`
            update wrf.question
            set short_name = 'hrdwr_num'
            where short_name = 'hrdwr_drwr'
        `);
    }
}
