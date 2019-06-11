import {Application, Request, Response} from 'express';
import {Connection, createConnection} from 'typeorm';

export abstract class Routes {
	protected app: Application;
	protected connection: Connection;

	protected constructor(application: Application, conn: Connection) {
		this.app = application;
		this.connection = conn;
		this.setAppCORS();
	}

	public setAppCORS(): void {
		this.app.use((req, res, next) => {
			res.header('Access-Control-Allow-Origin', '*');
			res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
			res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS, DELETE');
			next();
		});
	}

	public routes(app): void {
		createConnection().then((connection: Connection) => {
			// Product detail
			app.route('/product/:productId')
			// get specific product
				.get((req: Request, res: Response) => {
					// Get a single product
					res.status(200).send({
						message: 'GET specific product'
					});
				})
				.put((req: Request, res: Response) => {
					// Update a product
					res.status(200).send({
						message: 'Update product'
					});
				})
				.delete((req: Request, res: Response) => {
					// Delete a product
					res.status(200).send({
						message: 'DELETE product'
					});
				});
		});
	}

	public abstract registerRoutes(): void;
	public abstract setEndpoints(): void;
}
