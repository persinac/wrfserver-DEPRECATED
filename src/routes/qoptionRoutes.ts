import {createConnection, Repository} from "typeorm";
import {product_details} from "../entity/ProductDetails";
import {Request, Response} from "express";
import {question_options} from "../entity/QuestionOptions";

let repository: Repository<question_options>

export class qoptionroutes {
    public qotionroute(app): void {
        createConnection().then(connection => {
                repository = connection.getRepository(question_options);
                app.route('/qoptions')
                    .get(async (req: Request, res: Response) => {
                        const phs = await repository.find();
                        res.send(phs);
                    })
            }

        )
    }
}
