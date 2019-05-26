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
