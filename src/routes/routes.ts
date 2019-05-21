import {Request, Response} from "express";
import { createConnection, Repository } from "typeorm";
import { product_header } from "../entity/ProductHeader";
import {category} from "../entity/Category";

let repository: Repository<product_header>;

export class Routes {
    public routes(app): void {
        createConnection().then(connection => {
            repository = connection.getRepository(product_header);
            app.route('/')
                .get(async (req: Request, res: Response) => {
                    const phs = await repository.find();
                    res.send(phs);
                });
            // localhost:8080/product/relationship/all
            app.route('/product/relationship/all')
            // GET endpoint
                .get(async (req: Request, res: Response) => {
                    const phs = await repository.find({
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
                })

            // Product detail
            app.route('/product/:productId')
            // get specific product
                .get((req: Request, res: Response) => {
                    // Get a single product
                    res.status(200).send({
                        message: 'GET specific product'
                    })
                })
                .put((req: Request, res: Response) => {
                    // Update a product
                    res.status(200).send({
                        message: 'Update product'
                    })
                })
                .delete((req: Request, res: Response) => {
                    // Delete a product
                    res.status(200).send({
                        message: 'DELETE product'
                    })
                })
        });
    }
}

/*
'use strict';
module.exports = function(app) {
  var sample = require('../controller/sample-controller');

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.route('/sample/:player').post(sample.getSampleByName);
app.route('/sample/new/:player&:reporter').post(sample.createSample);
app.route('/sample/list').get(sample.getAllSamples);
};
 */