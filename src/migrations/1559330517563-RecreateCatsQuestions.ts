import {MigrationInterface, QueryRunner} from "typeorm";

export class RecreateCatsQuestions1559330517563 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("delete from product_details where cat_fk is not null;");
        await queryRunner.query("delete from question_options where q_fk is not null;");
        await queryRunner.query("delete from question where cat_fk is not null;");
        await queryRunner.query("delete from wrf.category where category_id > 0;");
        await queryRunner.query("ALTER TABLE wrf.category AUTO_INCREMENT = 1;");
        await queryRunner.query(`INSERT INTO wrf.category (category, is_active, created_by, updated_by, category_hierarchy, priority, belongs_to)
            VALUES
                ('Color', 1, 'admin', 'admin', 1, 5, null),
                ('Features / Luxuries', 1, 'admin', 'admin', 1, 3, null),
                ('Size', 1, 'admin', 'admin', 1, 1, null),
                ('Style', 1, 'admin', 'admin', 1, 2, null),
                ('Top', 1, 'admin', 'admin', 1, 4, null),
                ('Drawer Fronts', 1, 'admin', 'admin', 2, 8, 4),
                ('Baseboards', 1, 'admin', 'admin', 2, 7, 4),
                ('Shelving', 1, 'admin', 'admin', 2, 6, 4),
                ('Doors', 1, 'admin', 'admin', 2, 2, 4),
                ('Cabinets', 1, 'admin', 'admin', 2, 1, 4),
                ('Legs', 1, 'admin', 'admin', 2, 4, 4),
                ('Drawers', 1, 'admin', 'admin', 2, 3, 4),
                ('Hardware', 1, 'admin', 'admin', 2, 1, 2);`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("delete from product_details where cat_fk is not null;");
        await queryRunner.query("delete from question_options where q_fk is not null;");
        await queryRunner.query("delete from question where cat_fk is not null;");
        await queryRunner.query("delete from wrf.category where category_id > 0;");
        await queryRunner.query("ALTER TABLE wrf.category AUTO_INCREMENT = 1;");
    }

}
