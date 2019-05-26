import {Request, Response} from "express";
import {createConnection, Repository} from "typeorm";
import {product_details} from "../entity/ProductDetails";
import {SelectQueryBuilder} from "typeorm/browser";
import {hardware_reference_data} from "../entity/HardwareReference";
import {reference_data} from "../entity/ReferenceData";

let repository: Repository<reference_data>

export class ReferenceDataRoutes {
    public referenceDataRoutes(app): void {
        createConnection().then(connection => {
                const repository = connection.getRepository(reference_data)
                app.route('/reference')
                    .get(async (req: Request, res: Response) => {
                        const phs = await repository
                            .find();
                        res.send(phs);
                    });
                app.route('/reference/:id')
                    .get(async (req: Request, res: Response) => {
                            const phs = await repository
                                .createQueryBuilder("reference")
                                .where({
                                        rd_id: req.params.id
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