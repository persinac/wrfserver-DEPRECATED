import {
	Column,
	CreateDateColumn, Double,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';

@Entity({name: 'product_price_component'})
export class ProductPriceComponent {

	@PrimaryGeneratedColumn()
	public id: number;

	@Column()
	public pd_id: number;

	@Column({
		type: 'decimal',
		precision: 2,
		default: '0.00'
	})
	public actual_price: Double;

	@Column({
		type: 'decimal',
		precision: 2,
		default: '0.00'
	})
	public custom_price: Double;
	//
	// @CreateDateColumn()
	// public created_on: Date;
	//
	// @Column()
	// public created_by: string;
	//
	// @UpdateDateColumn()
	// public updated_on: Date;
	//
	// @Column()
	// public updated_by: string;
}
