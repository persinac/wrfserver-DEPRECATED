import {Connection} from 'typeorm';
import {Customer} from '../entity/Customer';

export class CustomerModel {
	public static createNewCustomer(): Customer {
		const customer = new Customer();
		customer.name = 'My New Customer';
		customer.primary_email = 'mnc@gmail.com';
		customer.shipping_address = '123 Main St';
		customer.created_by = 'admin';
		customer.updated_by = 'admin';

		return customer;
	}

	public static async saveNewCustomeor(customer: Customer, conn: Connection): Promise<Customer> {
		return conn.manager.save(customer);
	}
}
