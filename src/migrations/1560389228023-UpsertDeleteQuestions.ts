import {MigrationInterface, QueryRunner} from "typeorm";

export class UpsertDeleteQuestions1560389228023 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DELETE FROM wrf.product_details WHERE q_fk in (314,315,316);");
        await queryRunner.query("DELETE FROM wrf.question WHERE q_id in (314,315,316);");
        await queryRunner.query(`UPDATE wrf.question
            SET text = 'Length', short_name = 'cab_lngth', topic = 'Cabinet Length', tooltip = 'enter length for cabinet'
            WHERE q_id = 311;`);
        await queryRunner.query(`UPDATE wrf.question
            SET text = 'Width', short_name = 'cab_wdth', topic = 'Cabinet Width', tooltip = 'enter width for cabinet'
            WHERE q_id = 312;`);
        await queryRunner.query(`UPDATE wrf.question
            SET text = 'Height', short_name = 'cab_height', topic = 'Cabinet Height', tooltip = 'enter height for cabinet'
            WHERE q_id = 313;`);
        await queryRunner.query(`UPDATE wrf.question SET text = 'Width' WHERE q_id = 324;`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        // there's no going back on this one...
    }

}
