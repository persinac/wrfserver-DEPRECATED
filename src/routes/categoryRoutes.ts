import {createConnection, Repository} from "typeorm";
import {category} from "../entity/Category";
import {Request, Response} from "express";


let repository: Repository<category>;

export class CategoryRoutes {
    public catcalls(app): void {
        createConnection().then(connection => {
            repository = connection.getRepository(category);
            app.route('/category')
                .get(async (req: Request, res: Response) => {
                    const phs = await repository.find();
                    res.send(phs);
                }
            );
            app.route('/category/:id')
                .get(async (req: Request, res: Response) => {
                        const phs = await repository
                            .createQueryBuilder("category")
                            .where({
                                    category_id: req.params.id
                                }
                            )
                            .getOne();
                        if (!phs) {
                            res.send('No results found...')
                        }
                        res.send(phs);
                    }
                );

        })
    }
}