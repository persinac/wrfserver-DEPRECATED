import {Application, Request, Response} from 'express';
import {Connection, Repository} from 'typeorm';
import {ReferenceData} from '../entity/ReferenceData';
import {Routes} from "./routes";
import {Endpoints} from "../Structure/Structures";

export class ReferenceDataRoutes extends Routes {

  public readonly endpoints: Endpoints[];

  private repo: Repository<ReferenceData>;

  constructor(app: Application, conn: Connection) {
    super(app, conn);
    this.endpoints = [];
    this.repo = conn.getRepository(ReferenceData);
    this.setEndpoints();
    this.registerRoutes();
  }

  public setEndpoints(): void {
    this.endpoints['referenceData'] = '/referenceData';
    this.endpoints['referenceDataById'] = '/referenceData/:id';
  }

  public registerRoutes(): void {
    this.app.route(this.endpoints['referenceData'])
      .get(async (req: Request, res: Response) => {
        const phs = await this.repo.find();
        res.send(phs);
      });
    this.app.route(this.endpoints['referenceDataById'])
      .get(async (req: Request, res: Response) => {
        const hellyea = await this.repo
          .createQueryBuilder('referenceData')
          .where({
              qo_id: req.params.id
            }
          )
          .getOne();
        res.send(hellyea);
      })

  }
}