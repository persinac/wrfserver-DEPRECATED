import {Application, Request, Response} from 'express';
import {Connection, Repository} from 'typeorm';
import {Category} from '../entity/Category';
import {Routes} from "./routes";
import {Endpoints} from "../Structure/Structures";

export class CategoryRoutes extends Routes {

  public readonly endpoints: Endpoints[];

  private repo: Repository<Category>;

  constructor(app: Application, conn: Connection) {
    super(app, conn);
    this.endpoints = [];
    this.repo = conn.getRepository(Category);
    this.setEndpoints();
    this.registerRoutes();
  }

  public setEndpoints(): void {
    this.endpoints['category'] = '/category';
    this.endpoints['categoryById'] = '/category/:id';
  }

  public registerRoutes(): void {
    this.app.route(this.endpoints['category'])
      .get(async (req: Request, res: Response) => {
        const phs = await this.repo.find();
        res.send(phs);
      });
    this.app.route(this.endpoints['categoryById'])
      .get(async (req: Request, res: Response) => {
        const hellyea = await this.repo
          .createQueryBuilder('category')
          .where({
              qo_id: req.params.id
            }
          )
          .getOne();
        res.send(hellyea);
      })

  }
}