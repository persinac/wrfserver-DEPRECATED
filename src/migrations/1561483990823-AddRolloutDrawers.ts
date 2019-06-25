import {MigrationInterface, QueryRunner} from "typeorm";

export class AddRolloutDrawers1561483990823 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const category_id = 14;
        await queryRunner.query(`
        INSERT INTO wrf.question (text, short_name, topic, tooltip, instructions, datatype, is_active, created_by, updated_by, cat_fk, \`grouping\`, unique_dim)
        VALUES
            ('Vendor', 'rodwr_vndr', 'vendor', 'enter the vendor', '', 'string', 1, 'admin', 'admin', ${category_id}, 0, ''),
            ('Vendor PO#', 'rodwr_vndr_po', 'vendor PO #', 'enter the vendor PO #', '', 'string', 1, 'admin', 'admin', ${category_id}, 0, ''),
            ('Quantity', 'rodwr_quantity', 'quantity', '', '', 'number', 1, 'admin', 'admin', ${category_id}, 1, ''),
            ('Material Type', 'rodwr_mt', 'material type', 'enter the material type', '', 'string', 1, 'admin', 'admin', ${category_id}, 1, ''),
            ('Length', 'rodwr_lngth', 'length', 'enter a length', '', 'number', 1, 'admin', 'admin', ${category_id}, 2, 'rodwr_1'),
            ('Width', 'rodwr_wdth', 'width', 'enter a width', '', 'number', 1, 'admin', 'admin', ${category_id}, 2, 'rodwr_1'),
            ('Height', 'rodwr_height', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', ${category_id}, 2, 'rodwr_1'),
            ('Length', 'rodwr_lngth_2', 'length', 'enter a length', '', 'number', 1, 'admin', 'admin', ${category_id}, 3, 'rodwr_2'),
            ('Width', 'rodwr_wdth_2', 'width', 'enter a width', '', 'number', 1, 'admin', 'admin', ${category_id}, 3, 'rodwr_2'),
            ('Height', 'rodwr_height_2', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', ${category_id}, 3, 'rodwr_2'),
            ('Length', 'rodwr_lngth_3', 'length', 'enter a length', '', 'number', 1, 'admin', 'admin', ${category_id}, 4, 'rodwr_3'),
            ('Width', 'rodwr_wdth_3', 'width', 'enter a width', '', 'number', 1, 'admin', 'admin', ${category_id}, 4, 'rodwr_3'),
            ('Height', 'rodwr_height_3', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', ${category_id}, 4, 'rodwr_3'),
            ('Length', 'rodwr_lngth_4', 'length', 'enter a length', '', 'number', 1, 'admin', 'admin', ${category_id}, 5, 'rodwr_4'),
            ('Width', 'rodwr_wdth_4', 'width', 'enter a width', '', 'number', 1, 'admin', 'admin', ${category_id}, 5, 'rodwr_4'),
            ('Height', 'rodwr_height_4', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', ${category_id}, 5, 'rodwr_4'),
            ('Length', 'rodwr_lngth_5', 'length', 'enter a length', '', 'number', 1, 'admin', 'admin', ${category_id}, 6, 'rodwr_5'),
            ('Width', 'rodwr_wdth_5', 'width', 'enter a width', '', 'number', 1, 'admin', 'admin', ${category_id}, 6, 'rodwr_5'),
            ('Height', 'rodwr_height_5', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', ${category_id}, 6, 'rodwr_5'),
            ('Length', 'rodwr_lngth_6', 'length', 'enter a length', '', 'number', 1, 'admin', 'admin', ${category_id}, 7, 'rodwr_6'),
            ('Width', 'rodwr_wdth_6', 'width', 'enter a width', '', 'number', 1, 'admin', 'admin', ${category_id}, 7, 'rodwr_6'),
            ('Height', 'rodwr_height_6', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', ${category_id}, 7, 'rodwr_6');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`delete from question where short_name like 'rodwr_%'`);
    }

}
