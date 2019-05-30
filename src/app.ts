import * as bodyParser from 'body-parser';
import express from 'express';
import {Connection, createConnection} from 'typeorm';
import {CategoryRoutes} from './routes/CategoryRoutes';
import {OurTesterClass} from './routes/OurTesterClass';
import {ProductDetailsRoutes} from './routes/ProductDetailsRoutes';
import {ProductHeaderRoutes} from './routes/ProductHeaderRoutes';
import {QuestionOptionRoutes} from './routes/questionOptionRoutes';
import {QuestionRoutes} from './routes/QuestionRoutes';
import { Routes } from './routes/routes';

class App {

	public app: express.Application;
	public routePrv: Routes;
	public qoption: QuestionOptionRoutes = new QuestionOptionRoutes();
	public question: QuestionRoutes = new QuestionRoutes();
	public category: CategoryRoutes = new CategoryRoutes();

	private productDetailsTwo: ProductDetailsRoutes;
	private productHeader: ProductHeaderRoutes;

	// Use this class to prototype
	private ourTestClass: OurTesterClass;

	constructor() {
		this.app = express();
		this.config();
		this.qoption.qotionroute(this.app);
		this.question.questionRoute(this.app);
		this.category.categoryRoute(this.app);

		createConnection().then((conn: Connection) => {
			this.productDetailsTwo = new ProductDetailsRoutes(this.app, conn);
			this.productHeader = new ProductHeaderRoutes(this.app, conn);
			this.ourTestClass = new OurTesterClass(this.app, conn);
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
