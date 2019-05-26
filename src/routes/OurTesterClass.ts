import {Application, Request, Response} from 'express';
import {Connection, Repository} from 'typeorm';
import {ProductHeader} from '../entity/ProductHeader';
import {Endpoints} from '../Structure/Structures';
import {Routes} from './routes';

export class OurTesterClass extends Routes {

	public readonly endpoints: Endpoints[];

	private repo: Repository<ProductHeader>;

	constructor(app: Application, conn: Connection) {
		super(app, conn);
		this.endpoints = [];
		this.repo = conn.getRepository(ProductHeader);
		this.setEndpoints();
		this.registerRoutes();
	}

	public setEndpoints(): void {
		this.endpoints['getAllProductHeader'] = '/';
		this.endpoints['getAllProductHeaderRelationships'] = '/product/relationship/all';
	}

	public registerRoutes() {
		this.app.route(this.endpoints['getAllProductHeader'])
			.get(async (req: Request, res: Response) => {
				const phs = await this.repo.find();
				res.send(phs);
			});
		this.app.route(this.endpoints['getAllProductHeaderRelationships'])
		// GET endpoint
			.get(async (req: Request, res: Response) => {
				const phs = await this.repo.find({
					relations: [
						'product_details',
						'Customer',
						'product_details.category',
						'product_details.question',
						'product_details.question.question_options'
					],
					where: {
						ph_id: 1
					}
				});
				res.send(phs);
			})
			// POST endpoint
			.post((req: Request, res: Response) => {
				// Create new product
				res.status(200).send({
					message: 'POST new product'
				});
			});
	}
}
