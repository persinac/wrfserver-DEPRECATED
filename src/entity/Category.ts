import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {ProductDetails} from './ProductDetails';
import {Question} from './Question';

@Entity({name: 'category'})
export class Category {

	@PrimaryGeneratedColumn()
	public category_id: number;

	@Column()
	public category: string;

	@OneToMany(() => ProductDetails, (product: ProductDetails) => product.category)
	public product_details: ProductDetails[];

	@OneToMany(() => Question, (q: Question) => q.category)
	public question: Question[];

	@Column()
	public is_active: boolean;

	@CreateDateColumn()
	public created_on: Date;

	@Column()
	public created_by: string;

	@UpdateDateColumn()
	public updated_on: Date;

	@Column()
	public updated_by: string;
}
