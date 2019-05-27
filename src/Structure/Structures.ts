import {Customer} from '../entity/Customer';

export interface Endpoints {
	[name: string]: string;
}

export interface IProductHeaderFields {
	ph_id: number;
	group_id: number;
	order_num: number;
	customer: Customer;
	status: string;
	crafting_required: boolean;
	created_by: string;
	updated_by: string;
}

export interface ICategoryModel {
	category_id: number;
	category: string;
	is_active: boolean;
	created_by: string;
	updated_by: string;
}
