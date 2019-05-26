import {
	Connection
} from 'typeorm';
import {ProductHeader} from '../entity/ProductHeader';
import {IProductHeaderFields} from '../Structure/Structures';

export class ProductHeaderModel {
	public static async createNewProductHeader(productHeaderFields: IProductHeaderFields, conn: Connection): Promise<void> {
		const ph = new ProductHeader();
		ph.ph_id = productHeaderFields.ph_id;
		ph.group_id = productHeaderFields.group_id;
		ph.order_num = productHeaderFields.order_num;
		ph.customer = productHeaderFields.customer;
		ph.status = productHeaderFields.status;
		ph.crafting_required = productHeaderFields.crafting_required;
		ph.created_by = productHeaderFields.created_by;
		ph.updated_by = productHeaderFields.updated_by;

		await conn.manager.save(ph);
	}

	/* I don't like this implementation - but until we figure out cascading deletes...this will have to do */
	public static async removeProductHeader(productHeaderToRemove: ProductHeader, conn: Connection): Promise<void> {
		await conn.manager.remove(productHeaderToRemove.product_details);
		await conn.manager.remove(productHeaderToRemove);
	}
}
