import express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/routes";
import {CategoryRoutes} from "./routes/categoryRoutes";
import {QuestionRoutes} from "./routes/questionRoutes";
import {productDetailsRoutes} from "./routes/productDetailsRoutes";
import {qoptionroutes} from "./routes/qoptionRoutes";
import {userRoutes} from "./routes/userRoutes";
import {userAccounts} from "./routes/userAccountRoutes";
import {customer} from "./entity/Customer";
import {CustomerRoutes} from "./routes/customerRoute";
import {hardware_reference_data} from "./entity/HardwareReference";
import {HardwareReferenceRoutes} from "./routes/hardwareReferenceRoutes";
import {ReferenceDataRoutes} from "./routes/referenceDataRoutes";
import {ReferenceKeysRoutes} from "./routes/referenceKeysRoutes";
import {Connection, createConnection} from "typeorm";
import {ProductDetails} from "./routes/ProductDetails";
import {ProductHeaders} from "./routes/ProductHeaders";
import {OurTesterClass} from "./routes/OurTesterClass";

class App {

    public app: express.Application;
    // public routePrv: Routes = new Routes();
    public catcall: CategoryRoutes = new CategoryRoutes();
    public question: QuestionRoutes = new QuestionRoutes()
    public productDetails: productDetailsRoutes = new productDetailsRoutes()
    public qoption: qoptionroutes = new qoptionroutes();
    public user: userRoutes = new userRoutes();
    public userAccount: userAccounts = new userAccounts();
    public customer: CustomerRoutes = new CustomerRoutes();
    public hardwareReference: HardwareReferenceRoutes = new HardwareReferenceRoutes()
    public referenceData: ReferenceDataRoutes = new ReferenceDataRoutes();
    public referenceKeys: ReferenceKeysRoutes = new ReferenceKeysRoutes();

    private productDetailsTwo: ProductDetails;
    private productHeader: ProductHeaders;


    //Use this class to prototype
    private ourTestClass: OurTesterClass;

    constructor() {
        this.app = express();
        this.config();
        this.catcall.catcalls(this.app);
        this.question.questionRoutes(this.app);
        this.productDetails.productDetailsRoute(this.app);
        this.qoption.qotionroute(this.app);
        this.user.userRoute(this.app);
        this.userAccount.userAccount(this.app);
        this.customer.customerRoute(this.app);
        this.hardwareReference.HardwareReferenceRoute(this.app);
        this.referenceData.referenceDataRoutes(this.app);
        this.referenceKeys.referenceKeyRoutes(this.app);

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