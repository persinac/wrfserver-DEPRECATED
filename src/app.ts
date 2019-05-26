import express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/routes";
import {qoptionroutes} from "./routes/qoptionRoutes";
import {ProductDetails} from "./routes/ProductDetails";
import {OurTesterClass} from "./routes/OurTesterClass";
import {ProductHeaders} from "./routes/ProductHeaders";
import {Connection, createConnection} from "typeorm";

class App {

    public app: express.Application;
    public routePrv: Routes;
    public qoption: qoptionroutes = new qoptionroutes();

    private productDetailsTwo: ProductDetails;
    private productHeader: ProductHeaders;


    //Use this class to prototype
    private ourTestClass: OurTesterClass;

    constructor() {
        this.app = express();
        this.config();
        this.qoption.qotionroute(this.app);

        createConnection().then((conn: Connection) => {
            this.productDetailsTwo = new ProductDetails(this.app, conn);
            this.productHeader = new ProductHeaders(this.app, conn);
            this.ourTestClass = new OurTesterClass(this.app, conn);
        });
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;