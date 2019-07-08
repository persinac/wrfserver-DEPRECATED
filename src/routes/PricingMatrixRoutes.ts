import {Application, Request, Response} from 'express';
import {Connection, Repository} from 'typeorm';
import {Endpoints} from '../Structure/Structures';
import {Routes} from './routes';
import {PricingMatrix} from "../entity/PricingMatrix";

export class PricingMatrixRoutes extends Routes {

	public readonly endpoints: Endpoints[];

	private repo: Repository<PricingMatrix>;

	constructor(app: Application, conn: Connection) {
		super(app, conn);
		this.endpoints = [];
		this.repo = conn.getRepository(PricingMatrix);
		this.setEndpoints();
		this.registerRoutes();
	}

	public setEndpoints(): void {
		this.endpoints['pricing'] = '/pricing';
		this.endpoints['priceById'] = '/pricing/:id';
	}

	public registerRoutes(): void {
		this.app.route(this.endpoints['pricing'])
			.get(async (req: Request, res: Response) => {
				await this.repo
					.createQueryBuilder('pm')
					.getMany()
					.then((price: PricingMatrix[]) => {
						res.status(200).send(price);
					});
			});
		this.app.route(this.endpoints['priceById'])
			.get(async (req: Request, res: Response) => {
				await this.repo
					.createQueryBuilder('pm')
					.where({ pm_id: req.params.id })
					.getOne()
					.then((price: PricingMatrix) => {
						res.status(200).send(price);
					});
			});
	}
}
