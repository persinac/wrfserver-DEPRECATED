import {
	Connection
} from 'typeorm';
import {Category} from '../entity/Category';
import {ProductDetails} from '../entity/ProductDetails';
import {ProductHeader} from '../entity/ProductHeader';
import {Question} from '../entity/Question';
import {IProductHeaderFields} from '../Structure/Structures';

export class ProductDetailsModel {
	public static async createNewProductDetails(conn: Connection): Promise<void> {
		const pd = new ProductDetails();
		const productHeader = await conn.getRepository(ProductHeader).createQueryBuilder('head')
			.where({ ph_id: 1 })
			.getOne();
		const category = await conn.getRepository(Category).createQueryBuilder('cats')
			.where({ category_id: 1 })
			.getOne();
		const question = await conn.getRepository(Question).createQueryBuilder('quest')
			.where({ q_id: 1 })
			.getOne();
		pd.ph = productHeader;
		pd.category = category;
		pd.question = question;
		pd.created_by = 'admin';
		pd.updated_by = 'admin';
		pd.response = 'Yes';

		await conn.manager.save(pd);
	}

	public static async removeProductDetails(productDetailsToRemove: ProductDetails, conn: Connection): Promise<void> {
		await conn.manager.remove(productDetailsToRemove);
	}
}
