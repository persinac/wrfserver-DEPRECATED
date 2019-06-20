import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';
import {Category} from './Category';
import {ProductDetails} from './ProductDetails';
import {QuestionOptions} from './QuestionOptions';

@Entity({name: 'question'})
export class Question {

	@PrimaryGeneratedColumn()
	public q_id: number;

	@Column()
	public text: string;

	@Column()
	public short_name: string;

	@Column({
		default: ''
	})
	public topic: string;

	@Column({
		default: ''
	})
	public tooltip: string;

	@Column({
		default: ''
	})
	public instructions: string;

	@Column({
		default: 0
	})
	public grouping: number;

	@Column({
		default: ''
	})
	public unique_dim: string;

	@Column()
	public datatype: string;

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

	@OneToMany(() => QuestionOptions, (qo: QuestionOptions) => qo.question)
	public question_options: QuestionOptions[];

	@OneToMany(() => ProductDetails, (pd: ProductDetails) => pd.question)
	public product_details: ProductDetails[];

	@ManyToOne(() => Category, (key: Category) => key.question)
	@JoinColumn({
		name: 'cat_fk',
		referencedColumnName: 'category_id'
	})
	public category: Category;

	@Column()
	public cat_fk: string;
}
