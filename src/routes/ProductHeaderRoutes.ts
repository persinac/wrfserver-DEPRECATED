import {Application, Request, Response} from 'express';
import {Connection, Repository} from 'typeorm';
import {CustomerController} from '../controller/CustomerController';
import {ProductHeaderController} from '../controller/ProductHeaderController';
import {Customer} from '../entity/Customer';
import {ProductHeader} from '../entity/ProductHeader';
import {Endpoints, IProductHeaderFields} from '../Structure/Structures';
import {Routes} from './routes';

export class ProductHeaderRoutes extends Routes {

	public readonly endpoints: Endpoints[];

	private repo: Repository<ProductHeader>;

	constructor(app: Application, conn: Connection) {
		super(app, conn);
		this.endpoints = [];
		this.repo = conn.getRepository(ProductHeader);
		this.setEndpoints();
		this.registerRoutes();
	}

	public setEndpoints(): void {
		this.endpoints['baseProduct'] = '/product';
		this.endpoints['productById'] = '/product/:id';
		this.endpoints['getAllProductHeaderRelationships'] = '/product/relationship/all/:id';
		this.endpoints['productForSalesEntry'] = '/product/sale/:id';
	}

	public registerRoutes() {
		this.app.route(this.endpoints['baseProduct'])
			.get(async (req: Request, res: Response) => {
				const phs = await this.repo.find();
				res.send(phs);
			})
			.post(async (req: Request, res: Response) => {
				const phf: IProductHeaderFields = req.body;
				// TODO: FIX THIS TERRIBLE IF CONDITION
				if (phf.customer.customer_id) {
					CustomerController.retrieveCustomerById(this.connection, phf.customer.customer_id)
						.then((customer) => {
							phf.customer = customer.toCustomer();
							ProductHeaderController.createNewProductHeader(phf, this.connection)
								.then((newProduct) => {
									res.status(200).send({
										message: 'Success!', newProduct
									});
								})
								.catch((error) => {
									const err = error.message;
									res.status(400).send({ err });
								});
						})
						.catch((error) => {
						const err = error.message;
						res.status(400).send({ err });
					});
				} else {
					phf.customer = await CustomerController.saveNewCustomer(phf.customer, this.connection);
					ProductHeaderController.createNewProductHeader(phf, this.connection)
						.then((newProduct) => {
							res.status(200).send({
								message: 'Success!', newProduct
							});
						})
						.catch((error) => {
							const err = error.message;
							res.status(400).send({ err });
						});
				}
			});
		this.app.route(this.endpoints['getAllProductHeaderRelationships'])
		// GET endpoint
			.get(async (req: Request, res: Response) => {
				const phs = await this.repo.find({
					relations: [
						'product_details',
						'customer'
					],
					where: {
						ph_id: req.params.id
					}
				});
				res.send({phs});
			});
		this.app.route(this.endpoints['productById'])
			.get(async (req: Request, res: Response) => {
				const hellyea = await this.repo
					.createQueryBuilder('productHeader')
					.where({
							ph_id: req.params.id
						}
					)
					.getOne();
				res.send(hellyea);
			})
			.put(async (req: Request, res: Response) => {
				await this.repo.createQueryBuilder()
					.update(ProductHeader)
					.set(req.body)
					.where('ph_id = :id', {id: req.params.id})
					.execute()
					.then(() => {
						res.status(202).send({ message: 'Success!' });
					})
					.catch((error) => {
						const err = error.message;
						res.status(400).send({ err });
					});
			})
			.delete(async (req: Request, res: Response) => {
				const hellyea = await this.repo.find({
					relations: [ 'product_details' ],
					where: { ph_id: req.params.id }
				});
				ProductHeaderController.removeProductHeader(hellyea[0], this.connection)
					.then(() => {
						res.status(202).send({ message: 'Success!' });
					})
					.catch((error) => {
						const err = error.message;
						res.status(400).send({ err });
					});
		});
		this.app.route(this.endpoints['productForSalesEntry'])
			.get(async (req: Request, res: Response) => {
				const hellyea = await this.repo
					.find({
						relations: [ 'product_details' ],
						where: { ph_id: req.params.id }
					});
				res.send(hellyea);
			})
			.put(async (req: Request, res: Response) => {
				this.repo.createQueryBuilder()
					.update(ProductHeader)
					.set(req.body)
					.where('ph_id = :id', {id: req.params.id})
					.execute()
					.then(() => {
						res.status(202).send({ message: 'Success!' });
					})
					.catch((error) => {
						const err = error.message;
						res.status(400).send({ err });
					});
			})
			.delete(async (req: Request, res: Response) => {
				const hellyea = await this.repo.find({
					relations: [ 'product_details' ],
					where: { ph_id: req.params.id }
				});
				ProductHeaderController.removeProductHeader(hellyea[0], this.connection)
					.then(() => {
						res.status(202).send({ message: 'Success!' });
					})
					.catch((error) => {
						const err = error.message;
						res.status(400).send({ err });
					});
			});
	}
}
