import {Request, Response} from "express";
import {createConnection, Repository} from "typeorm";
import {product_details} from "../entity/ProductDetails";
import {SelectQueryBuilder} from "typeorm/browser";
import {hardware_reference_data} from "../entity/HardwareReference";
import {reference_data} from "../entity/ReferenceData";
import {reference_keys} from "../entity/ReferenceKeys";

let repository: Repository<reference_keys>

export class ReferenceKeysRoutes {
    public referenceKeyRoutes(app): void {
        createConnection().then(connection => {
                const repository = connection.getRepository(reference_keys)
                app.route('/referenceKeys')
                    .get(async (req: Request, res: Response) => {
                        const phs = await repository
                            .find();
                        res.send(phs);
                    });
                app.route('/referenceKeys/:id')
                    .get(async (req: Request, res: Response) => {
                            const phs = await repository
                                .createQueryBuilder("referenceKeys")
                                .where({
                                        rk_id: req.params.id
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
