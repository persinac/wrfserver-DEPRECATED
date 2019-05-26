import {createConnection, Repository} from "typeorm";
import {Request, Response} from "express";
import {user_roles} from "../entity/UserRoles";

let repository: Repository<user_roles>

export class userRoutes {
    public userRoute(app): void {
        createConnection().then(connection => {
        repository = connection.getRepository(user_roles);
            app.route('/user')
                .get(async (req: Request, res: Response) => {
                    const phs = await repository.find();
                    res.send(phs);
            });
            app.route('/user/:id')
                .get(async (req: Request, res: Response) => {
                        const phs = await repository
                            .createQueryBuilder("user")
                            .where({
                                    user_role_id: req.params.id
                                }
                            )
                            .getOne();
                        if (!phs) {
                            res.send('No results found...')
                        }
                        res.send(phs);
                    }
                );
            }

        )
    }
}