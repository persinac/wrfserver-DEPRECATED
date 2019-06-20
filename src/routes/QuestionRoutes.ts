import {Request, Response} from 'express';
import {createConnection, Repository} from 'typeorm';
import {Question} from '../entity/Question';
import {QuestionOptions} from '../entity/QuestionOptions';

let repository: Repository<Question>;

export class QuestionRoutes {
	public questionRoute(app): void {
		createConnection().then((connection) => {
			repository = connection.getRepository(Question);
			app.use((req, res, next) => {
				res.header('Access-Control-Allow-Origin', '*');
				res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
				next();
			});
			app.route('/question')
				.get(async (req: Request, res: Response) => {
					const phs = await repository
						.createQueryBuilder('q')
						.orderBy({
							cat_fk: "ASC",
							'q.grouping': "ASC"
						})
						.getMany();
					res.send(phs);
				});
			app.route('/question/:id')
				.get(async (req: Request, res: Response) => {
					console.log(req.params);
					const hellyea = await repository
						.createQueryBuilder('q')
						.where({
								q_id: req.params.id
							}
						)
						.getOne();
					res.send(hellyea);
				});
		});
	}
}
