import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {ProductHeader} from './ProductHeader';

@Entity({name: 'customer'})
export class Customer {

	@PrimaryGeneratedColumn()
	public customer_id: number;

	@OneToMany(() => ProductHeader, (product: ProductHeader) => product.customer)
	public product_header: ProductHeader[];

	@Column()
	public name: string;

	@Column()
	public primary_email: string;

	@Column({
		default: ''
	})
	public secondary_email: string;

	@Column({
		default: ''
	})
	public phone_number: string;

	@Column({
		default: ''
	})
	public shipping_address: string;

	@CreateDateColumn()
	public created_on: Date;

	@Column()
	public created_by: string;

	@UpdateDateColumn()
	public updated_on: Date;

	@Column()
	public updated_by: string;
}
