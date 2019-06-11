import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn, UpdateDateColumn
} from 'typeorm';
import {Question} from './Question';

@Entity({name: 'question_options'})
export class QuestionOptions {

	@PrimaryGeneratedColumn()
	public qo_id: number;

	@ManyToOne(() => Question, (key: Question) => key.question_options)
	@JoinColumn({
		name: 'q_fk',
		referencedColumnName: 'q_id'
	})
	public question: Question;

	@Column()
	public text: string;

	@Column()
	public sequence: number;

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
