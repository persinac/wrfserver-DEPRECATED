import {MigrationInterface, QueryRunner} from "typeorm";

export class RebuildQuestions1561050632929 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DELETE FROM `product_details`");
        await queryRunner.query("ALTER TABLE `product_details` AUTO_INCREMENT = 1");
        await queryRunner.query("DELETE FROM `question_options`");
        await queryRunner.query("ALTER TABLE `question_options` AUTO_INCREMENT = 1");
        await queryRunner.query("DELETE FROM `question`");
        await queryRunner.query("ALTER TABLE `question` AUTO_INCREMENT = 1");
        await queryRunner.query(`INSERT INTO wrf.question (text, short_name, topic, tooltip, instructions, datatype, is_active, created_by, updated_by, cat_fk, \`grouping\`, unique_dim) VALUES 
('Length', 'total_length', 'size', 'enter a length', '', 'string', 1, 'admin', 'admin', 3, 0, ''),
 ('Depth', 'total_depth', 'size', 'enter a depth', '', 'string', 1, 'admin', 'admin', 3, 0, ''),
 ('Height', 'total_height', 'size', 'enter a height', '', 'string', 1, 'admin', 'admin', 3, 0, ''),
 ('Quantity', 'cab_quantity', 'Cabinet Quantity', 'Select number of cabinets', '', 'number', 1, 'admin', 'admin', 10, 1, ''),
 ('Length', 'cab_lngth', 'Cabinet Length', 'enter length for cabinet', '', 'number', 1, 'admin', 'admin', 10, 2, 'cab_1'),
 ('Width', 'cab_wdth', 'Cabinet Width', 'enter width for cabinet', '', 'number', 1, 'admin', 'admin', 10, 2, 'cab_1'),
 ('Height', 'cab_height', 'Cabinet Height', 'enter height for cabinet', '', 'number', 1, 'admin', 'admin', 10, 2, 'cab_1'),
 ('Material Type', 'cab_mt', 'Cabinet Material Type', 'enter material type for cabinet', '', 'string', 1, 'admin', 'admin', 10, 1, ''),
 ('Paint', 'paint', 'Paint', 'enter paint color', '', 'string', 1, 'admin', 'admin', 1, 0, ''),
 ('Material Type', 'dr_mt', 'Doors Material Type', 'enter material type for doors', '', 'string', 1, 'admin', 'admin', 9, 0, ''),
 ('Vendor', 'dr_vndr', 'Vendor', 'enter vendor for doors', '', 'string', 1, 'admin', 'admin', 9, 1, ''),
 ('Vendor PO#', 'dr_vndr_po', 'Vendor PO#', 'enter vendor PO# for doors', '', 'string', 1, 'admin', 'admin', 9, 1, ''),
 ('Quantity', 'dr_qty', 'Door Quantity', 'enter number of doors', '', 'number', 1, 'admin', 'admin', 9, 2, ''),
 ('Length', 'dr_lngth', 'Door Length', 'enter length for doors', '', 'number', 1, 'admin', 'admin', 9, 3, ''),
 ('Width', 'dr_wdth', 'Door Width', 'enter width for doors', '', 'number', 1, 'admin', 'admin', 9, 3, ''),
 ('Vendor', 'dwr_vndr', 'Vendor', 'enter vendor for drawers', '', 'string', 1, 'admin', 'admin', 12, 0, ''),
 ('Vendor PO#', 'dwr_vndr_po', 'Vendor PO#', 'enter vendor PO# for drawers', '', 'string', 1, 'admin', 'admin', 12, 0, ''),
 ('Quantity', 'dwr_qty', 'Drawer Quantity', 'enter number of drawers', '', 'number', 1, 'admin', 'admin', 12, 1, ''),
 ('Length', 'dwr_lngth', 'Drawer Length', 'enter length for drawers', '', 'number', 1, 'admin', 'admin', 12, 2, ''),
 ('Width', 'dwr_wdth', 'Drawer Width', 'enter width for drawers', '', 'number', 1, 'admin', 'admin', 12, 2, ''),
 ('Material Type', 'dwr_mt', 'Drawers Material Type', 'enter material type for drawers', '', 'string', 1, 'admin', 'admin', 12, 3, ''),
 ('Vendor', 'legs_vndr', 'Vendor', 'enter vendor for legs', '', 'string', 1, 'admin', 'admin', 11, 0, ''),
 ('Vendor PO#', 'legs_vndr_po', 'Vendor PO#', 'enter vendor PO# for legs', '', 'string', 1, 'admin', 'admin', 11, 0, ''),
 ('Quantity', 'legs_qty', 'Legs Quantity', 'enter number of legs', '', 'number', 1, 'admin', 'admin', 11, 1, ''),
 ('Length', 'legs_lngth', 'Legs Length', 'enter length for legs', '', 'number', 1, 'admin', 'admin', 11, 2, ''),
 ('Width', 'legs_wdth', 'Legs Width', 'enter width for legs', '', 'number', 1, 'admin', 'admin', 11, 2, ''),
 ('Color', 'legs_clr', 'Legs Color', 'enter color for legs', '', 'string', 1, 'admin', 'admin', 11, 3, ''),
 ('Total Quantity', 'shlv_qty', 'Shelving Quantity', 'enter total number of shelves', '', 'number', 1, 'admin', 'admin', 8, 0, ''),
 ('Length', 'shlv_lngth', 'Shelving Length', 'enter length for shelves', '', 'number', 1, 'admin', 'admin', 8, 1, ''),
 ('Width', 'shlv_wdth', 'Shelving Width', 'enter width for shelves', '', 'number', 1, 'admin', 'admin', 8, 1, ''),
 ('Total Quantity', 'bb_qty', 'Baseboard Quantity', 'enter total number of baseboards', '', 'number', 1, 'admin', 'admin', 7, 0, ''),
 ('Length', 'bb_lngth', 'Baseboard Length', 'enter length for baseboards', '', 'number', 1, 'admin', 'admin', 7, 1, ''),
 ('Width', 'bb_wdth', 'Baseboard Width', 'enter width for baseboards', '', 'number', 1, 'admin', 'admin', 7, 1, ''),
 ('Vendor', 'top_vndr', 'Top Vendor', 'enter vendor for top', '', 'string', 1, 'admin', 'admin', 5, 0, ''),
 ('Vendor PO#', 'top_vndr_po', 'Top Vendor PO#', 'enter vendor PO# for top', '', 'string', 1, 'admin', 'admin', 5, 0, ''),
 ('Length', 'top_lngth', 'Top Length', 'enter length for top', '', 'number', 1, 'admin', 'admin', 5, 2, 'top_1'),
 ('Width', 'top_wdth', 'Top Width', 'enter width for top', '', 'number', 1, 'admin', 'admin', 5, 2, 'top_1'),
 ('Vendor', 'dwrfrnts_vndr', 'Drawer Fronts Vendor', 'enter vendor for drawer fronts', '', 'string', 1, 'admin', 'admin', 6, 0, ''),
 ('Vendor PO#', 'dwrfrnts_vndr_po', 'Drawer Fronts Vendor PO#', 'enter vendor PO# for drawer fronts', '', 'string', 1, 'admin', 'admin', 6, 0, ''),
 ('Quantity', 'dwrfrnts_qty', 'Drawer Fronts Quantity', 'enter number of drawer fronts', '', 'number', 1, 'admin', 'admin', 6, 1, ''),
 ('Length', 'dwrfrnts_lngth', 'Drawer Fronts Length', 'enter length for drawer fronts', '', 'number', 1, 'admin', 'admin', 6, 2, ''),
 ('Width', 'dwrfrnts_wdth', 'Drawer Fronts Width', 'enter width for drawer fronts', '', 'number', 1, 'admin', 'admin', 6, 2, ''),
 ('Hardware #', 'hrdwr_num', 'Hardware Number', 'enter the hardware number', '', 'number', 1, 'admin', 'admin', 13, 0, ''),
 ('Hardware SKU', 'hrdwr_sku', 'Hardware SKU', 'enter the hardware SKU', '', 'string', 1, 'admin', 'admin', 13, 0, ''),
 ('Order Type', 'pnt_ord_typ', 'Order Type', 'enter paint order type', '', 'string', 1, 'admin', 'admin', 1, 0, ''),
 ('Wine Rack', 'ftr_wr', 'Wine Rack', 'include wine rack in this order?', '', 'boolean', 1, 'admin', 'admin', 2, 0, ''),
 ('Pull Out Trash', 'ftr_pot', 'Pull Out Trash', 'include pull out trash in this order?', '', 'boolean', 1, 'admin', 'admin', 2, 1, ''),
 ('Dovetail Drawers', 'ftr_dtd', 'Dovetail Drawers', 'include dovetail drawers in this order?', '', 'boolean', 1, 'admin', 'admin', 2, 2, ''),
 ('Height', 'dr_height', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', 9, 3, ''),
 ('Height', 'dwr_height', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', 12, 2, ''),
 ('Height', 'dwrfrnts_height', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', 6, 2, ''),
 ('Height', 'legs_height', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', 11, 2, ''),
 ('Length', 'cab_lngth_2', 'length', 'enter a length', '', 'number', 1, 'admin', 'admin', 10, 3, 'cab_2'),
 ('Width', 'cab_wdth_2', 'width', 'enter a width', '', 'number', 1, 'admin', 'admin', 10, 3, 'cab_2'),
 ('Height', 'cab_height_2', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', 10, 3, 'cab_2'),
 ('Length', 'cab_lngth_3', 'length', 'enter a length', '', 'number', 1, 'admin', 'admin', 10, 4, 'cab_3'),
 ('Width', 'cab_wdth_3', 'width', 'enter a width', '', 'number', 1, 'admin', 'admin', 10, 4, 'cab_3'),
 ('Height', 'cab_height_3', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', 10, 4, 'cab_3'),
 ('Length', 'cab_lngth_4', 'length', 'enter a length', '', 'number', 1, 'admin', 'admin', 10, 5, 'cab_4'),
 ('Width', 'cab_wdth_4', 'width', 'enter a width', '', 'number', 1, 'admin', 'admin', 10, 5, 'cab_4'),
 ('Height', 'cab_height_4', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', 10, 5, 'cab_4'),
 ('Length', 'top_lngth_2', 'length', 'enter a length', '', 'number', 1, 'admin', 'admin', 5, 3, 'top_2'),
 ('Width', 'top_wdth_2', 'width', 'enter a width', '', 'number', 1, 'admin', 'admin', 5, 3, 'top_2'),
 ('Quantity', 'top_quantity', 'quantity', 'enter a quantity', '', 'number', 1, 'admin', 'admin', 5, 1, '');`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        // no coming back from this one either...
    }

}
