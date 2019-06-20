import {Application, Request, Response} from 'express';
import {Connection, Repository} from 'typeorm';
import {Customer} from '../entity/Customer';
import {Routes} from "./routes";
import {Endpoints} from "../Structure/Structures";

export class CustomerRoutes extends Routes {

  public readonly endpoints: Endpoints[];

  private repo: Repository<Customer>;

  constructor(app: Application, conn: Connection) {
    super(app, conn);
    this.endpoints = [];
    this.repo = conn.getRepository(Customer);
    this.setEndpoints();
    this.registerRoutes();
  }

  public setEndpoints(): void {
    this.endpoints['customer'] = '/customer';
    this.endpoints['customerById'] = '/customer/:id';
  }

  public registerRoutes(): void {
    this.app.route(this.endpoints['customer'])
      .get(async (req: Request, res: Response) => {
        const phs = await this.repo.find();
        res.send(phs);
      });
    this.app.route(this.endpoints['customerById'])
      .get(async (req: Request, res: Response) => {
        const hellyea = await this.repo
          .createQueryBuilder('customer')
          .where({
              qo_id: req.params.id
            }
          )
          .getOne();
        res.send(hellyea);
      })

  }
}