import {Application, Request, Response} from 'express';
import {Connection, Repository} from 'typeorm';
import {ProductDetails} from '../entity/ProductDetails';
import {Routes} from "./routes";
import {Endpoints} from "../Structure/Structures";

export class ProductDetailsRoutes extends Routes {

  public readonly endpoints: Endpoints[];

  private repo: Repository<ProductDetails>;

  constructor(app: Application, conn: Connection) {
    super(app, conn);
    this.endpoints = [];
    this.repo = conn.getRepository(ProductDetails);
    this.setEndpoints();
    this.registerRoutes();
  }

  public setEndpoints(): void {
    this.endpoints['productDetails'] = '/productDetails';
    this.endpoints['productDetailsById'] = '/productDetails/:id';
  }

  public registerRoutes(): void {
    this.app.route(this.endpoints['productDetails'])
      .get(async (req: Request, res: Response) => {
        const phs = await this.repo.find();
        res.send(phs);
      });
    this.app.route(this.endpoints['productDetailsById'])
      .get(async (req: Request, res: Response) => {
        const hellyea = await this.repo
          .createQueryBuilder('productDetails')
          .where({
              qo_id: req.params.id
            }
          )
          .getOne();
        res.send(hellyea);
      })

  }
}