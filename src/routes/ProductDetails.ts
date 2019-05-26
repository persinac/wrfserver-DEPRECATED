import {Application, Request, Response} from "express";
import {Connection, Repository} from "typeorm";
import {product_details} from "../entity/ProductDetails";
import {Routes} from "./routes";
import {Endpoints} from "../Structure/Structures";

export class ProductDetails extends Routes {

  readonly endpoints: Endpoints[];

  private repo: Repository<product_details>;

  constructor(app: Application, conn: Connection) {
    super(app, conn);
    this.endpoints = [];
    this.repo = conn.getRepository(product_details);
    this.setEndpoints();
    this.registerRoutes();
  }

  public setEndpoints(): void {
    this.endpoints['getProductDetailsById'] = '/product/details/:id';
  }

  public registerRoutes(): void {
    this.app.route(this.endpoints['getProductDetailsById'])
      .get(async (req: Request, res: Response) => {
        const hellyea = await this.repo
          .createQueryBuilder("productDetails")
          .where({
              pd_id: req.params.detailId
            }
          )
          .getOne();
        res.send(hellyea);
      });
  }
}
