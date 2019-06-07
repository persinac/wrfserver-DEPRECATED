import {
	Connection
} from 'typeorm';
import {ProductDetails} from '../entity/ProductDetails';
import {CategoryController} from './CategoryController';
import {ProductHeaderController} from './ProductHeaderController';
import {QuestionController} from './QuestionController';

interface IProductDetailsRequest {
	pd_id?: number;
	ph_fk?: number;
	cat_fk?: number;
	q_fk?: number;
	created_by?: string;
	updated_by?: string;
	response?: string;
}

export class ProductDetailsController {
	public static async createNewProductDetails(conn: Connection, req: IProductDetailsRequest[]): Promise<any> {
		const listOfDetails: ProductDetails[] = [];
		for (const detail of req) {
			if (detail.pd_id === null || detail.pd_id === undefined) { await this.validateRequest(detail); }
			console.log(req);
			const pd = new ProductDetails();
			const productHeader = await ProductHeaderController.retrieveProductHeaderById(conn, detail.ph_fk);
			const category = await CategoryController.retrieveCategoryById(conn, detail.cat_fk);
			const question = await QuestionController.retrieveQuestionById(conn, detail.q_fk);
			pd.pd_id = detail.pd_id;
			pd.ph = productHeader.toProductHeader();
			pd.category = category.toCategory();
			pd.question = question.toQuestion();
			pd.created_by = detail.created_by || 'admin';
			pd.updated_by = detail.updated_by || 'admin';
			pd.response = detail.response;
			listOfDetails.push(pd);
		}

		return await conn.manager.save(listOfDetails);
	}

	private static validateRequest(req: IProductDetailsRequest) {
		if (req.cat_fk === null || typeof req.cat_fk === 'undefined') {
			return Promise.reject(new Error('Category ID cannot be empty'));
		} else if (req.ph_fk === null || typeof req.ph_fk === 'undefined') {
			return Promise.reject(new Error('Product Header ID cannot be empty'));
		} else if (req.q_fk === null || typeof req.q_fk === 'undefined') {
			return Promise.reject(new Error('Question ID cannot be empty'));
		}
		// else if (req.response === null || typeof req.response === 'undefined') {
		// 	return Promise.reject(new Error('Response cannot be empty'));
		// }
	}

	public static async removeProductDetails(productDetailsToRemove: ProductDetails, conn: Connection): Promise<void> {
		await conn.manager.remove(productDetailsToRemove);
	}
}
