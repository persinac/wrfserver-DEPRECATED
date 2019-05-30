import {Request, Response} from 'express';
import {createConnection, Repository} from 'typeorm';
import {Category} from '../entity/Category';

let repository: Repository<Category>;

export class CategoryRoutes {
	public categoryRoute(app): void {
		createConnection().then((connection) => {
			repository = connection.getRepository(Category);
			app.use((req, res, next) => {
				res.header('Access-Control-Allow-Origin', '*');
				res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
				next();
			});
			app.route('/category')
				.get(async (req: Request, res: Response) => {
					const phs = await repository.find();
					res.send(phs);
				});
			app.route('/category/hierarchy/:id')
				.get(async (req: Request, res: Response) => {
					await repository
						.createQueryBuilder('c')
						.where({ category_hierarchy: req.params.id	})
						.addOrderBy('c.priority', 'ASC')
						.getMany()
						.then((cats) => {
							res.status(200).send(cats);
						})
						.catch((err: any) => {
							res.status(404).send(err);
						});
				});
		});
	}
}
