import {createConnection, createQueryBuilder, Repository} from "typeorm";
import {product_details} from "../entity/ProductDetails";
import {Request, Response} from "express";

let repository: Repository<product_details>

export class productDetailsRoutes {
    public productDetailsRoute(app): void {
        createConnection().then(connection => {
            repository = connection.getRepository(product_details);
            app.route('/productDetails')
                .get(async (req: Request, res: Response) => {
                        const phs = await repository.find();
                        res.send(phs);
                    }
                );
            app.route('/productDetails/:detailId')
                .get(async (req: Request, res: Response) => {
                    const phs = await repository
                        .createQueryBuilder("productDetails")
                        //.select("productDetails.response")
                        .where({
                                pd_id: req.params.detailId
                            }
                        )
                        .getOne();
                    res.send(phs);
                })
            }
        )
    }
}