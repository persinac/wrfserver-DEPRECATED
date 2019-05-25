import {Request, Response} from "express";
import {createConnection, Repository} from "typeorm";
import {product_details} from "../entity/ProductDetails";
import {SelectQueryBuilder} from "typeorm/browser";
import {hardware_reference_data} from "../entity/HardwareReference";

let repository: Repository<hardware_reference_data>

export class HardwareReferenceRoutes {
    public HardwareReferenceRoute(app): void {
        createConnection().then(connection => {
                const repository = connection.getRepository(hardware_reference_data)
                app.route('/hardwareReference')
                    .get(async (req: Request, res: Response) => {
                        const phs = await repository
                            .find();
                        res.send(phs);
                    });
            app.route('/hardwareReference/:id')
                .get(async (req: Request, res: Response) => {
                        const phs = await repository
                            .createQueryBuilder("hardwareReference")
                            .where({
                                hw_id: req.params.id
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