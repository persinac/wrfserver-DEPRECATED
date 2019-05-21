import {MigrationInterface, QueryRunner} from "typeorm";

export class RefDataInsert1558450200209 implements MigrationInterface {

    /**
     * FK Order:
     *  1 - Vendor
     *  2 - Measurement (secondary)
     *  3 - Top Type
     *  4 - Paint Order Type
     *  5 - Paint Color
     *
     *  -6- Hardware Reference Data Inserts
     *
     */
    public async up(queryRunner: QueryRunner): Promise<any> {

        /**
         *  1. Vendor
         */
        await queryRunner.query(
          "INSERT INTO `reference_data` (`value`, `is_active`, `created_by`, `updated_by`, `rk_fk`)\n" +
          "VALUES " +
          `("Worthy\'s Run", 1, "admin", "admin", 1)` +
          `, ("Wurth", 1, "admin", "admin", 1)` +
          `, ("Abella Stone", 1, "admin", "admin", 1)` +
          `, ("Lawrence Crouse", 1, "admin", "admin", 1)` +
          `, ("Brandt", 1, "admin", "admin", 1)` +
          `, ("Hicksville Planning Mill", 1, "admin", "admin", 1)` +
          `, ("O\'Shea Lumber Company", 1, "admin", "admin", 1)` +
          `, ("Don\'s Wood Village", 1, "admin", "admin", 1)` +
          `, ("Nova Design", 1, "admin", "admin", 1)` +
          `, ("Precision Wood", 1, "admin", "admin", 1)` +
          `, ("No Vendor", 1, "admin", "admin", 1)` +
          ";");

        /**
         *  2. Measurement
         */
        await queryRunner.query(
          "INSERT INTO `reference_data` (`value`, `is_active`, `created_by`, `updated_by`, `rk_fk`)\n" +
          "VALUES " +
          `("0", 1, "admin", "admin", 2)` +
          `, ("1/8", 1, "admin", "admin", 2)` +
          `, ("1/4", 1, "admin", "admin", 2)` +
          `, ("3/8", 1, "admin", "admin", 2)` +
          `, ("1/2", 1, "admin", "admin", 2)` +
          `, ("5/8", 1, "admin", "admin", 2)` +
          `, ("3/4", 1, "admin", "admin", 2)` +
          `, ("7/8", 1, "admin", "admin", 2)` +
          ";");

        /**
         *  3. Top Type
         */
        await queryRunner.query(
          "INSERT INTO `reference_data` (`value`, `is_active`, `created_by`, `updated_by`, `rk_fk`)\n" +
          "VALUES " +
          `("Wood", 1, "admin", "admin", 3)` +
          `, ("Stone", 1, "admin", "admin", 3)` +
          `, ("No Top", 1, "admin", "admin", 3)` +
          ";");

        /**
         *  4. Paint Order Type
         */
        await queryRunner.query(
          "INSERT INTO `reference_data` (`value`, `is_active`, `created_by`, `updated_by`, `rk_fk`)\n" +
          "VALUES " +
          `("Special", 1, "admin", "admin", 4)` +
          `, ("Standard", 1, "admin", "admin", 4)` +
          ";");

        /**
         *  5. Paint Colors
         */
        await queryRunner.query(
          "INSERT INTO `reference_data` (`value`, `is_active`, `created_by`, `updated_by`, `rk_fk`)\n" +
          "VALUES " +
          `("Milk Paint - Snow White", 1, "admin", "admin", 5)` +
          `, ("Milk Paint - Antique White", 1, "admin", "admin", 5)` +
          `, ("Milk Paint - Linen", 1, "admin", "admin", 5)` +
          `, ("Milk Paint - Millstone", 1, "admin", "admin", 5)` +
          `, ("Milk Paint - Dark Chocolate", 1, "admin", "admin", 5)` +
          `, ("Milk Paint - Buttermilk Yellow", 1, "admin", "admin", 5)` +
          `, ("Milk Paint - Basil Green", 1, "admin", "admin", 5)` +
          `, ("Milk Paint - Emerald", 1, "admin", "admin", 5)` +
          `, ("Milk Paint - Persimmon", 1, "admin", "admin", 5)` +
          `, ("Milk Paint - Brick Red", 1, "admin", "admin", 5)` +
          `, ("Milk Paint - Persian Blue", 1, "admin", "admin", 5)` +
          `, ("Milk Paint - Halcyon Blue", 1, "admin", "admin", 5)` +
          `, ("Milk Paint - Klein Blue", 1, "admin", "admin", 5)` +
          `, ("Milk Paint - Coastal Blue", 1, "admin", "admin", 5)` +
          `, ("Milk Paint - Seagul Gray", 1, "admin", "admin", 5)` +
          `, ("Milk Paint - Drift wood", 1, "admin", "admin", 5)` +
          `, ("Milk Paint - Queenstown Gray", 1, "admin", "admin", 5)` +
          `, ("Milk Paint - Lamp Black", 1, "admin", "admin", 5)` +
          `, ("Chalk Paint - Chalk White", 1, "admin", "admin", 5)` +
          `, ("Chalk Paint - Bone White", 1, "admin", "admin", 5)` +
          `, ("Chalk Paint - French Vanilla", 1, "admin", "admin", 5)` +
          `, ("Chalk Paint - Chapin Gray", 1, "admin", "admin", 5)` +
          `, ("Chalk Paint - Limestone", 1, "admin", "admin", 5)` +
          `, ("Chalk Paint - Empire Gray", 1, "admin", "admin", 5)` +
          `, ("Chalk Paint - Slate Gray", 1, "admin", "admin", 5)` +
          `, ("Chalk Paint - Black Pepper", 1, "admin", "admin", 5)` +
          `, ("Chalk Paint - Bayberry Green", 1, "admin", "admin", 5)` +
          `, ("Chalk Paint - Nantucket Green", 1, "admin", "admin", 5)` +
          `, ("Chalk Paint - Key West Blue", 1, "admin", "admin", 5)` +
          `, ("Chalk Paint - Summertime Blue", 1, "admin", "admin", 5)` +
          `, ("Chalk Paint - Stillwater Blue", 1, "admin", "admin", 5)` +
          `, ("Chalk Paint - Charleton Blue", 1, "admin", "admin", 5)` +
          `, ("Chalk Paint - Fjord Blue", 1, "admin", "admin", 5)` +
          `, ("Chalk Paint - Midnight Blue", 1, "admin", "admin", 5)` +
          ";");

        /**
         *  6. Hardware Reference Data Inserts
         */
        await queryRunner.query(
          "INSERT INTO `hardware_reference_data` (`short_name`, `long_name`, `sku`, `is_active`, `created_by`, `updated_by`)\n" +
          "VALUES " +
          `("HARDWARE_6", "HARDWARE #6", "P50122H-SN-C5", 1, "admin", "admin")` +
          `, ("HARDWARE_9", "HARDWARE #9", "9377-10VB-P", 1, "admin", "admin")` +
          `, ("HARDWARE_10", "HARDWARE #10", "H9379-10WN-P", 1, "admin", "admin")` +
          `, ("HARDWARE_14", "HARDWARE #14", "P010120-B3-C", 1, "admin", "admin")` +
          `, ("HARDWARE_15", "HARDWARE #15", "P01025-VBC-C", 1, "admin", "admin")` +
          `, ("HARDWARE_16", "HARDWARE #16", "PO1012-SS-C", 1, "admin", "admin")` +
          `, ("HARDWARE_25", "HARDWARE #25", "9355-10VB-P", 1, "admin", "admin")` +
          `, ("HARDWARE_26", "HARDWARE #26", "9351-10VB-P", 1, "admin", "admin")` +
          `, ("HARDWARE_27", "HARDWARE #27", "9374-10VB-P", 1, "admin", "admin")` +
          `, ("HARDWARE_31", "HARDWARE #31", "9352-10WN-P", 1, "admin", "admin")` +
          `, ("HARDWARE_32", "HARDWARE #32", "PN2001-FB-C", 1, "admin", "admin")` +
          `, ("HARDWARE_39", "HARDWARE #39", "P22781C-SN-C", 1, "admin", "admin")` +
          `, ("HARDWARE_40", "HARDWARE #40", "P22781C-VBC-C", 1, "admin", "admin")` +
          `, ("HARDWARE_50", "HARDWARE #50", "0967-155-P", 1, "admin", "admin")` +
          `, ("HARDWARE_51", "HARDWARE #51", "7884-1BPN-P", 1, "admin", "admin")` +
          `, ("HARDWARE_52", "HARDWARE #52", "7886-IVB-P", 1, "admin", "admin")` +
          `, ("no_hardware", "No Hardware", "", 1, "admin", "admin")` +
          ";");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DELETE FROM `reference_data`");
        await queryRunner.query("ALTER TABLE `reference_data` AUTO_INCREMENT = 1");
        await queryRunner.query("DELETE FROM `hardware_reference_data`");
        await queryRunner.query("ALTER TABLE `hardware_reference_data` AUTO_INCREMENT = 1");
    }

}
