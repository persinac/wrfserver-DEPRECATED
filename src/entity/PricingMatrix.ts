import {
	Column,
	CreateDateColumn, Double,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';

@Entity({name: 'ref_pricing_matrix'})
export class PricingMatrix {

	@PrimaryGeneratedColumn()
	public pm_id: number;

	@Column()
	public short_name: string;

	@Column()
	public sku: string;

	@Column({
		type: 'decimal',
		precision: 2,
		default: '0.00'
	})
	public price: Double;

	@Column({
		type: 'decimal',
		precision: 2,
		default: '0.00'
	})
	public sell_price: Double;

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
