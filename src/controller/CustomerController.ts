import {Connection} from 'typeorm';
import {Customer} from '../entity/Customer';

export class CustomerController extends Customer {

	constructor(customerObj: CustomerController) {
		super();
		const {
			customer_id = null,
			name = '',
			primary_email = null,
			secondary_email = null,
			phone_number = null,
			shipping_address = null,
			created_by = '',
			created_on = null,
			updated_by = '',
			updated_on = null
		} = customerObj;
		this.customer_id = customer_id;
		this.name = name;
		this.primary_email = primary_email;
		this.secondary_email = secondary_email;
		this.phone_number = phone_number;
		this.shipping_address = shipping_address;
		this.created_by = created_by;
		this.created_on = created_on;
		this.updated_by = updated_by;
		this.updated_on = updated_on;
	}

	public toCustomer(): Customer {
		const customer: Customer = new Customer();
		customer.customer_id = this.customer_id;
		customer.name = this.name;
		customer.primary_email = this.primary_email;
		customer.secondary_email = this.secondary_email;
		customer.phone_number = this.phone_number;
		customer.shipping_address = this.shipping_address;
		customer.created_by = this.created_by;
		customer.created_on = this.created_on;
		customer.updated_by = this.updated_by;
		customer.updated_on = this.updated_on;
		return customer;
	}

	public to<T>(value: T): T { return value; }

	public static async retrieveCustomerById(conn: Connection, customer_id: number): Promise<CustomerController> {
		return conn.getRepository(Customer).createQueryBuilder('cust')
			.where({ customer_id })
			.getOne()
			.then((customer: Customer) => {
				if (customer) {
					return new CustomerController(customer as CustomerController);
				} else {
					return Promise.reject(new Error('Customer ID [' + customer_id + '] does not exist.'));
				}
			});
	}

	public static async saveNewCustomer(customer: Customer, conn: Connection): Promise<Customer> {
		const newCustomer = new Customer();
		newCustomer.customer_id = customer.customer_id;
		newCustomer.name = customer.name;
		newCustomer.primary_email = customer.primary_email;
		newCustomer.secondary_email = customer.secondary_email;
		newCustomer.shipping_address = customer.shipping_address;
		newCustomer.phone_number = customer.phone_number;
		newCustomer.created_by = customer.created_by || 'admin';
		newCustomer.updated_by = customer.updated_by || 'admin';
		return conn.manager.save(newCustomer);
	}
}
