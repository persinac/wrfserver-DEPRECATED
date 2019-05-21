import {MigrationInterface, QueryRunner} from "typeorm";

/***
 * Helpful Links
 * https://github.com/typeorm/typeorm/blob/master/docs/using-cli.md#create-a-new-migration
 * https://github.com/typeorm/typeorm/blob/master/docs/migrations.md
 *
 * Windows was throwing a shit-fit, so here's an issue that shed some light and
 * also linked another issue that helped resolve my issue:
 * https://github.com/typeorm/typeorm/issues/1675
 */

export class PostRefactoring1558398498273 implements MigrationInterface {

    /* First make sure to add state_2 as a column in ProductHeader entity */
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE product_header ADD COLUMN state_2 varchar(255)`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        // reverts things made in "up" method
        await queryRunner.query(`ALTER TABLE product_header DROP COLUMN state_2`);
    }

}
