import express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/routes";
import {Catcalls} from "./routes/catcalls";
import {QuestionRoutes} from "./routes/questionRoutes";
import {productDetailsRoutes} from "./routes/productDetailsRoutes";
import {qoptionroutes} from "./routes/qoptionRoutes";
import {userRoutes} from "./routes/userRoutes";
import {userAccounts} from "./routes/userAccountRoutes";
import {getDetailsById} from "./routes/getDetailsById";

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    public catcall: Catcalls = new Catcalls();
    public question: QuestionRoutes = new QuestionRoutes()
    public productDetails: productDetailsRoutes = new productDetailsRoutes()
    public qoption: qoptionroutes = new qoptionroutes();
    public user: userRoutes = new userRoutes();
    public userAccount: userAccounts = new userAccounts();
    public getDetails: getDetailsById = new getDetailsById();

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.catcall.catcalls(this.app);
        this.question.questionRoutes(this.app);
        this.productDetails.productDetailsRoute(this.app);
        this.qoption.qotionroute(this.app);
        this.user.userRoute(this.app);
        this.userAccount.userAccount(this.app);
        this.getDetails.getDetailsId(this.app);
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;