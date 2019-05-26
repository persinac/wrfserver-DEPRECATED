import {Request, Response} from 'express';
import {createConnection, Repository} from 'typeorm';
import {QuestionOptions} from '../entity/QuestionOptions';

let repository: Repository<QuestionOptions>;

export class QuestionOptionRoutes {
	public qotionroute(app): void {
		createConnection().then((connection) => {
				repository = connection.getRepository(QuestionOptions);
				app.route('/question/options')
					.get(async (req: Request, res: Response) => {
						const phs = await repository.find();
						res.send(phs);
					});
			});
	}
}
