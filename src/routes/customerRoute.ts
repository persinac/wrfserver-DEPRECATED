import {createConnection, Repository} from "typeorm";
import {customer} from "../entity/Customer";
import {Request, Response} from "express";
import {FindConditions} from "typeorm/browser";

let repository: Repository<customer>

export class CustomerRoutes {
    public customerRoute(app): void {
        createConnection().then(connection => {
                repository = connection.getRepository(customer);
                app.route('/customer')
                    .get(async (req: Request, res: Response) => {
                            const phs = await repository.find();
                            res.send(phs);
                        }
                    );
            app.route('/customer/:id')
                .get(async (req: Request, res: Response) => {
                        const phs = await repository
                            .createQueryBuilder("customer")
                            .where({
                                    customer_id: req.params.id
                                }
                            )
                            .getOne();
                        res.send(phs);
                    }
                );
            app.route('/custEmail/:email')
                .get(async (req: Request, res: Response) => {
                        const phs = await repository
                            .createQueryBuilder("customer")
                            .where({
                                    primary_email: req.params.email
                                }
                            )
                            .getOne();
                        res.send(phs);
                    }
                );
            //app.route('/changeName/:name')
                //.put(
               // )
            }
        )
    }
}