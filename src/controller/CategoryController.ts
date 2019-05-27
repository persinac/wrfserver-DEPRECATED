import {
	Connection
} from 'typeorm';
import {Category} from '../entity/Category';

export class CategoryController extends Category {

	constructor(catObj: CategoryController) {
		super();
		const {
			category_id = null,
			category = '',
			is_active = null,
			created_by = '',
			created_on = null,
			updated_by = '',
			updated_on = null
		} = catObj;
		this.category_id = category_id;
		this.category = category;
		this.is_active = is_active;
		this.created_by = created_by;
		this.created_on = created_on;
		this.updated_by = updated_by;
		this.updated_on = updated_on;
	}

	public toCategory(): Category {
		const cat: Category = new Category();
		cat.category_id = this.category_id;
		cat.category = this.category;
		cat.is_active = this.is_active;
		cat.created_by = this.created_by;
		cat.created_on = this.created_on;
		cat.updated_by = this.updated_by;
		cat.updated_on = this.updated_on;
		return cat;
	}

	public static async retrieveCategoryById(conn: Connection, category_id: number): Promise<CategoryController> {
		return conn.getRepository(Category).createQueryBuilder('cats')
			.where({ category_id })
			.getOne()
			.then((category: Category) => {
				if (category) {
					return new CategoryController(category as CategoryController);
				} else {
					return Promise.reject(new Error('Category ID [' + category_id + '] does not exist.'));
				}
			});
	}
}
