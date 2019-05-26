import {Application, Request, Response} from 'express';
import {Connection, Repository} from 'typeorm';
import {ProductDetails} from '../entity/ProductDetails';
import {Endpoints} from '../Structure/Structures';
import {Routes} from './routes';

export class ProductDetailsRoutes extends Routes {

	public readonly endpoints: Endpoints[];

	private repo: Repository<ProductDetails>;

	constructor(app: Application, conn: Connection) {
		super(app, conn);
		this.endpoints = [];
		this.repo = conn.getRepository(ProductDetails);
		this.setEndpoints();
		this.registerRoutes();
	}

	public setEndpoints(): void {
		this.endpoints['getProductDetailsById'] = '/product/details/:id';
	}

	public registerRoutes(): void {
		this.app.route(this.endpoints['getProductDetailsById'])
			.get(async (req: Request, res: Response) => {
				const hellyea = await this.repo
					.createQueryBuilder('productDetails')
					.where({
							pd_id: req.params.detailId
						}
					)
					.getOne();
				res.send(hellyea);
			});
	}
}
