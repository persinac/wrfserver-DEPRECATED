import {createConnection, Repository} from "typeorm";
import {Request, Response} from "express";
import {question} from "../entity/Question";

let repository: Repository<question>;

export class QuestionRoutes {
    public questionRoutes(app): void {
        createConnection().then(connection => {
            repository = connection.getRepository(question);
            app.route('/question')
                .get(async (req: Request, res: Response) => {
                    const phs = await repository.find();
                    res.send(phs);
                })

        })
    }
}