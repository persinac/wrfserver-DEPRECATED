import {
	Connection
} from 'typeorm';
import {ProductDetails} from '../entity/ProductDetails';
import {CategoryController} from './CategoryController';
import {ProductHeaderController} from './ProductHeaderController';
import {QuestionController} from './QuestionController';

interface IProductDetailsRequest {
	productHeaderId?: number;
	categoryId?: number;
	questionId?: number;
	createdBy?: string;
	updatedBy?: string;
	response?: string;
}

export class ProductDetailsController {
	public static async createNewProductDetails(conn: Connection, req: IProductDetailsRequest[]): Promise<void> {
		const listOfDetails: ProductDetails[] = [];
		for (const detail of req) {
			await this.validateRequest(detail);
			console.log(req);
			const pd = new ProductDetails();
			const productHeader = await ProductHeaderController.retrieveProductHeaderById(conn, detail.productHeaderId);
			const category = await CategoryController.retrieveCategoryById(conn, detail.categoryId);
			const question = await QuestionController.retrieveQuestionById(conn, detail.questionId);
			pd.ph = productHeader.toProductHeader();
			pd.category = category.toCategory();
			pd.question = question.toQuestion();
			pd.created_by = detail.createdBy || 'admin';
			pd.updated_by = detail.updatedBy || 'admin';
			pd.response = detail.response;
			listOfDetails.push(pd);
		}

		await conn.manager.save(listOfDetails);
	}

	private static validateRequest(req: IProductDetailsRequest) {
		if (req.categoryId === null || typeof req.categoryId === 'undefined') {
			return Promise.reject(new Error('Category ID cannot be empty'));
		} else if (req.productHeaderId === null || typeof req.productHeaderId === 'undefined') {
			return Promise.reject(new Error('Product Header ID cannot be empty'));
		} else if (req.questionId === null || typeof req.questionId === 'undefined') {
			return Promise.reject(new Error('Question ID cannot be empty'));
		} else if (req.response === null || typeof req.response === 'undefined') {
			return Promise.reject(new Error('Response cannot be empty'));
		}
	}

	public static async removeProductDetails(productDetailsToRemove: ProductDetails, conn: Connection): Promise<void> {
		await conn.manager.remove(productDetailsToRemove);
	}
}
