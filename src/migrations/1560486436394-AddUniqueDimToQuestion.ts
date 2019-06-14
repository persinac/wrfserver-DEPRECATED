import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUniqueDimToQuestion1560486436394 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `question` ADD `unique_dim` varchar(255) NOT NULL DEFAULT ''");
        await queryRunner.query(`
            UPDATE wrf.question SET unique_dim = 'cab_2' where short_name in ('cab_height_2', 'cab_lngth_2', 'cab_wdth_2');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `question` DROP COLUMN `unique_dim`");
    }

}
