import {MigrationInterface, QueryRunner} from "typeorm";

export class CategoryUpdate1559231128380 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.query("ALTER TABLE `category` ADD `category_hierarchy` int NOT NULL DEFAULT 1");
		await queryRunner.query("ALTER TABLE `category` ADD `priority` int NOT NULL DEFAULT 99");
		await queryRunner.query(
			"UPDATE `category`\n" +
			` set category_hierarchy = 2;`);

		await queryRunner.query(
			"INSERT INTO `category` (`category`, `category_hierarchy`, `priority`, `is_active`, `created_by`, `updated_by`)\n" +
			"VALUES " +
			`("Size", 1, 1, 1, "admin", "admin")` +
			`, ("Style", 1, 2, 1, "admin", "admin")` +
			`, ("Top", 1, 4, 1, "admin", "admin")` +
			`, ("Color", 1, 5, 1, "admin", "admin")` +
			";");

		await queryRunner.query(
			"UPDATE `category`\n" +
			` set category = "Features / Luxuries", category_hierarchy = 1, priority = 3` +
			` where category = "Feature";`);
	}

	public async down(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.query("DELETE FROM `category` " +
			`where category in ("Size", "Style", "Top", "Color")`);
		await queryRunner.query("ALTER TABLE `category` DROP COLUMN `category_hierarchy`");
	}

}
