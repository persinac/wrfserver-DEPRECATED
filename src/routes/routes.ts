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

	public abstract registerRoutes(): void;
	public abstract setEndpoints(): void;
}
