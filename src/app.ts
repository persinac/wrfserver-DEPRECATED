import * as bodyParser from 'body-parser';
import express from 'express';
import {Connection, createConnection} from 'typeorm';
//import {CategoryRoutes} from './routes/CategoryRoutes';
import {OurTesterClass} from './routes/OurTesterClass';
import {ProductDetailsRoutes} from './routes/ProductDetailsRoutes';
import {ProductHeaderRoutes} from './routes/ProductHeaderRoutes';
import {QuestionOptionRoutes} from './routes/questionOptionRoutes';
import {ReferenceKeysRoutes} from './routes/referenceKeysRoutes';
import {ReferenceDataRoutes} from './routes/referenceDataRoutes';
import {CategoryRoutes} from "./routes/CategoryRoutes";
import {CustomerRoutes} from "./routes/CustomerRoutes";
import {HardwareReferenceDataRoutes} from "./routes/hardwareReferenceDataRoutes";
import {QuestionRoutes} from "./routes/QuestionRoutes";
//import {QuestionRoutes} from './routes/QuestionRoutes';
//import { Routes } from './routes/routes';

class App {

	public app: express.Application;
//	public routePrv: Routes;
	//public qoption: QuestionOptionRoutes = new QuestionOptionRoutes();
	//public question: QuestionRoutes = new QuestionRoutes();
	//public category: CategoryRoutes = new CategoryRoutes();

	private productDetails: ProductDetailsRoutes;
	private productHeader: ProductHeaderRoutes;
	private questionOption: QuestionOptionRoutes;
	private referenceKey: ReferenceKeysRoutes;
	private referenceData: ReferenceDataRoutes;
	private category: CategoryRoutes;
	private customer: CustomerRoutes;
	private hardwareReferenceData: HardwareReferenceDataRoutes;
	private question: QuestionRoutes;
	// Use this class to prototype
	private ourTestClass: OurTesterClass;

	constructor() {
		this.app = express();
		this.config();
		// this.qoption.qotionroute(this.app);
		//this.question.questionRoute(this.app);
		//this.category.categoryRoute(this.app);

		createConnection().then((conn: Connection) => {
			this.productDetails = new ProductDetailsRoutes(this.app, conn);
			this.productHeader = new ProductHeaderRoutes(this.app, conn);
			this.ourTestClass = new OurTesterClass(this.app,conn );
			this.questionOption = new QuestionOptionRoutes(this.app, conn);
			this.referenceKey = new ReferenceKeysRoutes(this.app, conn);
			this.referenceData = new ReferenceDataRoutes(this.app, conn);
			this.category = new CategoryRoutes(this.app, conn);
			this.customer = new CustomerRoutes(this.app, conn);
			this.hardwareReferenceData = new HardwareReferenceDataRoutes(this.app, conn);
			this.question = new QuestionRoutes(this.app, conn);
		});
	}

	private config(): void {
		// support application/json type post data
		this.app.use(bodyParser.json());
		// support application/x-www-form-urlencoded post data
		this.app.use(bodyParser.urlencoded({ extended: false }));
	}
}

export default new App().app;
