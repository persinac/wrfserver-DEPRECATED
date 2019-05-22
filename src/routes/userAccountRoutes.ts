import {createConnection, Repository} from "typeorm";
import {Request, Response} from "express";
import {user_accounts} from "../entity/UserAccounts";

let repository: Repository<user_accounts>

export class userAccounts {
    public userAccount(app): void {
        createConnection().then(connection => {
                repository = connection.getRepository(user_accounts);
                app.route('/useraccounts')
                    .get(async (req: Request, res: Response) => {
                        const phs = await repository.find();
                        res.send(phs);
                    })
            }

        )
    }
}