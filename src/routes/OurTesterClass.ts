import {Application, Request, Response} from "express";
import {Connection, Repository} from "typeorm";
import {product_details} from "../entity/ProductDetails";
import {Routes} from "./routes";
import {Endpoints} from "../Structure/Structures";
import {product_header} from "../entity/ProductHeader";

export class OurTesterClass extends Routes {

  readonly endpoints: Endpoints[];

  private repo: Repository<product_header>;

  constructor(app: Application, conn: Connection) {
    super(app, conn);
    this.endpoints = [];
    this.repo = conn.getRepository(product_header);
    this.setEndpoints();
    this.registerRoutes();
  }

  public setEndpoints(): void {
    this.endpoints['getAllProductHeader'] = '/';
    this.endpoints['getAllProductHeaderRelationships'] = '/product/relationship/all';
  }

  public registerRoutes() {
    this.app.route(this.endpoints['getAllProductHeader'])
      .get(async (req: Request, res: Response) => {
        const phs = await this.repo.find();
        res.send(phs);
      });
    this.app.route(this.endpoints['getAllProductHeaderRelationships'])
    // GET endpoint
      .get(async (req: Request, res: Response) => {
        const phs = await this.repo.find({
          relations: [
            "product_details",
            "customer",
            "product_details.category",
            "product_details.question",
            "product_details.question.question_options"
          ],
          where: {
            ph_id: 1
          }
        });
        res.send(phs);
      })
      // POST endpoint
      .post((req: Request, res: Response) => {
        // Create new product
        res.status(200).send({
          message: 'POST new product'
        })
      });
  }
}