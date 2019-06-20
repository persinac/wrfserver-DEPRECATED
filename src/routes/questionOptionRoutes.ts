import {Application, Request, Response} from 'express';
import {Connection, Repository} from "typeorm";
import {QuestionOptions} from '../entity/QuestionOptions';
import {Endpoints, IQuestionOptions} from "../Structure/Structures";
import {Routes} from "./routes";

export class QuestionOptionRoutes extends Routes {

	public readonly endpoints: Endpoints[];

	private repo: Repository<QuestionOptions>;

	constructor(app: Application, conn: Connection) {
		super(app, conn);
		this.endpoints = [];
		this.repo = conn.getRepository(QuestionOptions);
		this.setEndpoints();
		this.registerRoutes();
	}

	public setEndpoints(): void {
		this.endpoints['question'] = '/question';
		this.endpoints['questionById'] = '/question/:id';
	}

	public registerRoutes(): void {
		this.app.route(this.endpoints['question'])
			.get(async (req: Request, res: Response) => {
				const phs = await this.repo.find();
				res.send(phs);
			});
		this.app.route(this.endpoints['questionById'])
			.get(async (req: Request, res: Response) => {
				const hellyea = await this.repo
					.createQueryBuilder('questionOption')
					.where({
							qo_id: req.params.id
						}
					)
					.getOne();
				res.send(hellyea);
			})

	}
}
