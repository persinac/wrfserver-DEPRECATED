import {Request, Response} from "express";
import {createConnection, Repository} from "typeorm";
import {product_details} from "../entity/ProductDetails";
import {SelectQueryBuilder} from "typeorm/browser";

let repository: Repository<product_details>

export class getDetailsById {
    public getDetailsId(app): void {
        createConnection().then(connection => {

            const repository = connection.getRepository(product_details)
            app.route('/productDetails/:detailId')
                .get(async (req: Request, res: Response) => {
                    const hellyea = await repository
                        .createQueryBuilder("productDetails")
                        //.select("productDetails.response")
                        .where({
                            pd_id: req.params.detailId
                        }
                        )
                        .getOne();
                    res.send(hellyea);
                })
         }
        )
    }
}