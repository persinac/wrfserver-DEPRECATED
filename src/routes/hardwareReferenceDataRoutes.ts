import {Application, Request, Response} from 'express';
import {Connection, Repository} from 'typeorm';
import {HardwareReferenceData} from '../entity/HardwareReference';
import {Routes} from "./routes";
import {Endpoints} from "../Structure/Structures";

export class HardwareReferenceDataRoutes extends Routes {

  public readonly endpoints: Endpoints[];

  private repo: Repository<HardwareReferenceData>;

  constructor(app: Application, conn: Connection) {
    super(app, conn);
    this.endpoints = [];
    this.repo = conn.getRepository(HardwareReferenceData);
    this.setEndpoints();
    this.registerRoutes();
  }

  public setEndpoints(): void {
    this.endpoints['hardwareReferenceData'] = '/hardwareReferenceData';
    this.endpoints['hardwareReferenceDataById'] = '/hardwareReferenceData/:id';
  }

  public registerRoutes(): void {
    this.app.route(this.endpoints['hardwareReferenceData'])
      .get(async (req: Request, res: Response) => {
        const phs = await this.repo.find();
        res.send(phs);
      });
    this.app.route(this.endpoints['hardwareReferenceDataById'])
      .get(async (req: Request, res: Response) => {
        const hellyea = await this.repo
          .createQueryBuilder('hardwareReferenceData')
          .where({
              qo_id: req.params.id
            }
          )
          .getOne();
        res.send(hellyea);
      })

  }
}