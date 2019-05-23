import {MigrationInterface, QueryRunner} from "typeorm";

export class RefKeyInsert1558445339687 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("" +
          "INSERT INTO `reference_keys` (`long_name`, `short_name`, `is_active`, `created_on`, `created_by`, `updated_on`, `updated_by`)\n" +
          "VALUES " +
          "('Vendors', 'vendors', 1, now(), 'admin', now(), 'admin')" +
          ", ('Measurement (secondary)', 'measurement_secondary', 1, now(), 'admin', now(), 'admin')" +
          ", ('Top Type', 'top_type', 1, now(), 'admin', now(), 'admin')" +
          ", ('Paint Order Type', 'paint_order_type', 1, now(), 'admin', now(), 'admin')" +
          ", ('Paint Color', 'paint_color', 1, now(), 'admin', now(), 'admin')" +
          ", ('Hardware Label', 'hardware_label', 1, now(), 'admin', now(), 'admin')" +
          ", ('Hardware SKU', 'hardware_sku', 1, now(), 'admin', now(), 'admin')" +
          ";");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DELETE FROM `reference_keys`");
        await queryRunner.query("ALTER TABLE `reference_keys` AUTO_INCREMENT = 1");
    }

}
