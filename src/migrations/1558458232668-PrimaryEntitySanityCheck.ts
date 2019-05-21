import {MigrationInterface, QueryRunner} from "typeorm";

export class PrimaryEntitySanityCheck1558458232668 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        /**
         *  1. Category
         */
        await queryRunner.query(
          "INSERT INTO `category` (`category`, `is_active`, `created_by`, `updated_by`)\n" +
          "VALUES " +
          `("Legs", 1, "admin", "admin")` +
          `, ("Drawer", 1, "admin", "admin")` +
          `, ("Feature", 1, "admin", "admin")` +
          ";");

        /**
         *  2. Questions and Question Options
         */
        await queryRunner.query(
          "INSERT INTO `question` (`topic`, `tooltip`, `instructions`, `datatype`, `text`, `short_name`, `cat_fk`," +
          " `is_active`, `created_by`, `updated_by`)\n" +
          "VALUES " +
          `("TOPIC", "IMA TOOLTIP", "MOAR INSTRUCTIONS", "STRING", "I'm the question?", "test_question", 1, 1, "admin", "admin")` +
          `, ("TOPIC 2", "IMANOTHER TOOLTIP", "INSTRUCTIONS", "STRING", "I'm the first question?", "test_question", 2, 1, "admin", "admin")` +
          `, ("TOPIC", "IMA COOLER TOOLTIP", "MOAR", "INT", "I'm the second question?", "test_second_question", 1, 1, "admin", "admin")` +
          ";");

        await queryRunner.query(
          "INSERT INTO `question_options` (`sequence`, `text`, `q_fk`, `is_active`, `created_by`, `updated_by`)\n" +
          "VALUES " +
          `("1", "Yes", 1,  1, "admin", "admin")` +
          `, ("2", "No", 1, 1, "admin", "admin")` +
          `, ("3", "Blank", 1, 1, "admin", "admin")` +
          `, ("1", "True", 2, 1, "admin", "admin")` +
          `, ("2", "False", 2, 1, "admin", "admin")` +
          ";");

        /**
         *  3. Customer
         */
        await queryRunner.query(
          "INSERT INTO `customer` (`name`, `primary_email`, `created_by`, `updated_by`)\n" +
          "VALUES " +
          `("Alex", "alex@gmail.com", "admin", "admin")` +
          `, ("Mike", "mike@gmail.com", "admin", "admin")` +
          ";");

        /**
         *  4. Product Header
         */
        await queryRunner.query(
          "INSERT INTO `product_header` (`group_id`, `order_num`, `customer_fk`, `status`, `crafting_required`, `created_by`, `updated_by`)\n" +
          "VALUES " +
          `(1, 123, 1, "Fine", 1, "admin", "admin")` +
          `, (1, 4123, 2, "Fine", 1, "admin", "admin")` +
          ";");

        /**
         *  5. Product Details
         */
        await queryRunner.query(
          "INSERT INTO `product_details` (`ph_fk`, `cat_fk`, `q_fk`, `response`, `created_by`, `updated_by`)\n" +
          "VALUES " +
          `(1, 1, 1, "Yes", "admin", "admin")` +
          `, (1, 1, 2, "Yes", "admin", "admin")` +
          `, (1, 3, 3, "48", "admin", "admin")` +
          `, (2, 1, 1, "Yes", "admin", "admin")` +
          `, (2, 2, 2, "No", "admin", "admin")` +
          `, (2, 2, 3, "300", "admin", "admin")` +
          ";");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DELETE FROM `product_details`");
        await queryRunner.query("ALTER TABLE `product_details` AUTO_INCREMENT = 1");
        await queryRunner.query("DELETE FROM `product_header`");
        await queryRunner.query("ALTER TABLE `product_header` AUTO_INCREMENT = 1");
        await queryRunner.query("DELETE FROM `customer`");
        await queryRunner.query("ALTER TABLE `customer` AUTO_INCREMENT = 1");
        await queryRunner.query("DELETE FROM `question_options`");
        await queryRunner.query("ALTER TABLE `question_options` AUTO_INCREMENT = 1");
        await queryRunner.query("DELETE FROM `question`");
        await queryRunner.query("ALTER TABLE `question` AUTO_INCREMENT = 1");
        await queryRunner.query("DELETE FROM `category`");
        await queryRunner.query("ALTER TABLE `category` AUTO_INCREMENT = 1");
    }

}
