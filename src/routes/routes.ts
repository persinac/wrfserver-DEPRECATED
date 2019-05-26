import {Application} from "express";
import {Connection} from "typeorm";

export abstract class Routes {
  protected app: Application;
  protected connection: Connection;

  protected constructor(application: Application, conn: Connection) {
    this.app = application;
    this.connection = conn;
    this.setAppCORS();
  }

  public setAppCORS() {
    this.app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
  }

  // only saving this code for POST/PUT/DELETE example
    // public routes(app): void {
    //     createConnection().then((connection: Connection)=> {
    //         // Product detail
    //         app.route('/product/:productId')
    //         // get specific product
    //             .get(async (req: Request, res: Response) => {
    //                 const phs = await repository
    //                     .createQueryBuilder("product")
    //                     //.select("productDetails.response")
    //                     .where({
    //                             pd_id: req.params.productId
    //                         }
    //                     )
    //                     .getOne();
    //                 res.send(phs);
    //             })
    //             .put((req: Request, res: Response) => {
    //                 // Update a product
    //                 res.status(200).send({
    //                     message: 'Update product'
    //                 })
    //             })
    //             .delete((req: Request, res: Response) => {
    //                 // Delete a product
    //                 res.status(200).send({
    //                     message: 'DELETE product'
    //                 })
    //             })
    //     });
    // }

  abstract registerRoutes(): void;
  abstract setEndpoints(): void;
}