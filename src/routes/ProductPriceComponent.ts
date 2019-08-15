import {Application, Request, Response} from 'express';
import {Connection, Repository} from 'typeorm';
import {Endpoints} from '../Structure/Structures';
import {Routes} from './routes';
import {ProductPriceComponent} from "../entity/ProductPriceComponent";

export class ProductPriceComponentRoutes extends Routes {

	public readonly endpoints: Endpoints[];

	private repo: Repository<ProductPriceComponent>;

	constructor(app: Application, conn: Connection) {
		super(app, conn);
		this.endpoints = [];
		this.repo = conn.getRepository(ProductPriceComponent);
		this.setEndpoints();
		this.registerRoutes();
	}

	public setEndpoints(): void {
		this.endpoints['productPrices'] = '/prices/products';
		this.endpoints['productPricesById'] = '/prices/products/:id';
	}

	public registerRoutes(): void {
		this.app.route(this.endpoints['productPrices'])
			.get(async (req: Request, res: Response) => {
				await this.repo
					.createQueryBuilder('ppc')
					.where(`ppc.pd_id IN (${req.body['pd_ids']})`)
					.getMany()
					.then((price: ProductPriceComponent[]) => {
						res.status(200).send(price);
					});
			})
			.post(async (req: Request, res: Response) => {
				console.log(req.body);
				this.repo
					.save(req.body)
					.then((price_components: any) => {
						res.status(201).send({ message: 'Success!', price_components });
					})
					.catch((error) => {
						const err = error.message;
						res.status(400).send({ err });
					});
			});;
	}
}
