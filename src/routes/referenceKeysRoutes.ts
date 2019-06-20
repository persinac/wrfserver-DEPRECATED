import {Application, Request, Response} from 'express';
import {Connection, Repository} from 'typeorm';
import {ReferenceKeys} from '../entity/ReferenceKeys';
import {Routes} from "./routes";
import {Endpoints} from "../Structure/Structures";

export class ReferenceKeysRoutes extends Routes {

	public readonly endpoints: Endpoints[];

	private repo: Repository<ReferenceKeys>;

	constructor(app: Application, conn: Connection) {
		super(app, conn);
		this.endpoints = [];
		this.repo = conn.getRepository(ReferenceKeys);
		this.setEndpoints();
		this.registerRoutes();
	}

	public setEndpoints(): void {
		this.endpoints['referenceKey'] = '/referenceKey';
		this.endpoints['referenceKeyById'] = '/referenceKey/:id';
	}

	public registerRoutes(): void {
		this.app.route(this.endpoints['referenceKey'])
			.get(async (req: Request, res: Response) => {
				const phs = await this.repo.find();
				res.send(phs);
			});
		this.app.route(this.endpoints['referenceKeyById'])
			.get(async (req: Request, res: Response) => {
				const hellyea = await this.repo
					.createQueryBuilder('referenceKey')
					.where({
							qo_id: req.params.id
						}
					)
					.getOne();
				res.send(hellyea);
			})

	}
}
