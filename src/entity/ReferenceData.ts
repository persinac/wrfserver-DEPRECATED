import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';
import { ReferenceKeys } from './ReferenceKeys';

@Entity({name: 'reference_data'})
export class ReferenceData {

	@PrimaryGeneratedColumn()
	public rd_id: number;

	@ManyToOne(() => ReferenceKeys, (key: ReferenceKeys) => key.ref_data)
	@JoinColumn({
		name: 'rk_fk',
		referencedColumnName: 'rk_id'
	})
	public reference_keys: ReferenceKeys;

	@Column()
	public value: string;

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
