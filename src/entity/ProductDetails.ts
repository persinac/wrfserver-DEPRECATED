import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';
import {Category} from './Category';
import {ProductHeader} from './ProductHeader';
import {Question} from './Question';

@Entity({name: 'product_details'})
export class ProductDetails {

	@PrimaryGeneratedColumn()
	public pd_id: number;

	@ManyToOne(() => ProductHeader, (key: ProductHeader) => key.product_details)
	@JoinColumn({
		name: 'ph_fk',
		referencedColumnName: 'ph_id'
	})
	public ph: ProductHeader;

	@Column()
	public ph_fk: number;

	@ManyToOne(() => Category, (key: Category) => key.product_details)
	@JoinColumn({
		name: 'cat_fk',
		referencedColumnName: 'category_id'
	})
	public category: Category;

	@Column()
	public cat_fk: number;

	@ManyToOne(() => Question, (key: Question) => key.product_details)
	@JoinColumn({
		name: 'q_fk',
		referencedColumnName: 'q_id'
	})
	public question: Question;

	@Column()
	public q_fk: number;

	@Column()
	public response: string;

	@CreateDateColumn()
	public created_on: Date;

	@Column()
	public created_by: string;

	@UpdateDateColumn()
	public updated_on: Date;

	@Column()
	public updated_by: string;
}
