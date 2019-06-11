import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {ReferenceData} from './ReferenceData';

@Entity({name: 'reference_keys'})
export class ReferenceKeys {

	@PrimaryGeneratedColumn()
	public rk_id: number;

	@OneToMany(() => ReferenceData, (ref_data: ReferenceData) => ref_data.reference_keys)
	public ref_data: ReferenceData[];

	@Column()
	public short_name: string;

	@Column()
	public long_name: string;

	@Column()
	public is_active: boolean;

	@CreateDateColumn()
	public created_on: Date;

	@Column()
	public created_by: string;

	@CreateDateColumn()
	public updated_on: Date;

	@Column()
	public updated_by: string;
}
