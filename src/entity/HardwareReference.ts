import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';

@Entity({name: 'hardware_reference_data'})
export class HardwareReferenceData {

	@PrimaryGeneratedColumn()
	public hw_id: number;

	@Column()
	public short_name: string;

	@Column()
	public long_name: string;

	@Column()
	public sku: string;

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
