import {
	Connection
} from 'typeorm';
import {ProductHeader} from '../entity/ProductHeader';
import {IProductHeaderFields} from '../Structure/Structures';

export class ProductHeaderController extends ProductHeader {

	constructor(productHeader: ProductHeaderController) {
		super();
		const {
			ph_id = null,
			group_id = null,
			order_num = null,
			status = null,
			crafting_required = null,
			created_by = '',
			created_on = null,
			updated_by = '',
			updated_on = null
		} = productHeader;
		this.ph_id = ph_id;
		this.group_id = group_id;
		this.order_num = order_num;
		this.status = status;
		this.crafting_required = crafting_required;
		this.created_by = created_by;
		this.created_on = created_on;
		this.updated_by = updated_by;
		this.updated_on = updated_on;
	}

	public toProductHeader(): ProductHeader {
		const productHeader: ProductHeader = new ProductHeader();
		productHeader.ph_id = this.ph_id;
		productHeader.group_id = this.group_id;
		productHeader.order_num = this.order_num;
		productHeader.status = this.status;
		productHeader.crafting_required = this.crafting_required;
		productHeader.created_by = this.created_by;
		productHeader.created_on = this.created_on;
		productHeader.updated_by = this.updated_by;
		productHeader.updated_on = this.updated_on;
		return productHeader;
	}

	public static async retrieveProductHeaderById(conn: Connection, product_id: number): Promise<ProductHeaderController> {
		return conn.getRepository(ProductHeader).createQueryBuilder('ph')
			.where({ ph_id: product_id })
			.getOne()
			.then((ph) => {
				if (ph) {
					return new ProductHeaderController(ph as ProductHeaderController);
				} else {
					return Promise.reject(new Error('Product Header ID [' + product_id + '] does not exist.'));
				}
			});
	}

	public static async createNewProductHeader(productHeaderFields: IProductHeaderFields, conn: Connection): Promise<ProductHeader> {
		const ph = new ProductHeader();
		ph.ph_id = productHeaderFields.ph_id;
		ph.group_id = productHeaderFields.group_id;
		ph.order_num = productHeaderFields.order_num;
		ph.customer = productHeaderFields.customer;
		ph.status = productHeaderFields.status;
		ph.notes = productHeaderFields.notes;
		ph.reference_number = productHeaderFields.reference_number;
		ph.crafting_required = productHeaderFields.crafting_required;
		ph.created_by = productHeaderFields.created_by;
		ph.updated_by = productHeaderFields.updated_by;

		return conn.manager.save(ph);
	}

	/* I don't like this implementation - but until we figure out cascading deletes...this will have to do */
	public static async removeProductHeader(productHeaderToRemove: ProductHeader, conn: Connection): Promise<void> {
		await conn.manager.remove(productHeaderToRemove.product_details);
		await conn.manager.remove(productHeaderToRemove);
	}
}
