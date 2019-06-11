import {Application, Request, Response} from 'express';
import {Connection, Repository} from 'typeorm';
import {ProductDetailsController} from '../controller/ProductDetailsController';
import {ProductHeaderController} from '../controller/ProductHeaderController';
import {ProductDetails} from '../entity/ProductDetails';
import {ProductHeader} from '../entity/ProductHeader';
import {Endpoints} from '../Structure/Structures';
import {Routes} from './routes';

export class ProductDetailsRoutes extends Routes {

	public readonly endpoints: Endpoints[];

	private repo: Repository<ProductDetails>;

	constructor(app: Application, conn: Connection) {
		super(app, conn);
		this.endpoints = [];
		this.repo = conn.getRepository(ProductDetails);
		this.setEndpoints();
		this.registerRoutes();
	}

	public setEndpoints(): void {
		this.endpoints['productDetailsByDetailId'] = '/product/details/detail/:id';
		this.endpoints['productDetailsByProductId'] = '/product/details/:productId';
		this.endpoints['createProductDetail'] = '/product/details/new';
		this.endpoints['upsertProductDetail'] = '/product/details';
	}

	public registerRoutes(): void {
		this.app.route(this.endpoints['productDetailsByDetailId'])
			.get(async (req: Request, res: Response) => {
				await this.repo
					.createQueryBuilder('productDetails')
					.where({ pd_id: req.params.id })
					.getOne()
					.then((detail: ProductDetails) => {
						res.status(200).send(detail);
					});
			})
			.put(async (req: Request, res: Response) => {
				this.repo.createQueryBuilder()
					.update(ProductDetails)
					.set(req.body)
					.where('pd_id = :id', {id: req.params.id})
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
				await this.repo.find({
						where: { pd_id: req.params.id }
					})
					.then((detail: ProductDetails[]) => {
						ProductDetailsController.removeProductDetails(detail[0], this.connection)
							.then(() => {
								res.status(202).send({ message: 'Success!' });
							})
							.catch((error) => {
								const err = error.message;
								res.status(400).send({ err });
							});
					});
			});
		this.app.route(this.endpoints['createProductDetail'])
			.post(async (req: Request, res: Response) => {
				console.log(req.body);
				ProductDetailsController.createNewProductDetails(this.connection, req.body)
					.then(() => {
						res.status(201).send({ message: 'Success!' });
					})
					.catch((error) => {
						const err = error.message;
						res.status(400).send({ err });
					});
			});
		this.app.route(this.endpoints['upsertProductDetail'])
			.put(async (req: Request, res: Response) => {
				console.log(req.body);
				ProductDetailsController.createNewProductDetails(this.connection, req.body)
					.then((details) => {
						res.status(200).send({ message: 'Success!', details });
					})
					.catch((error) => {
						const err = error.message;
						res.status(400).send({ err });
					});
			});
	}
}
