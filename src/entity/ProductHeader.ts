import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn, OneToMany
} from 'typeorm';
import {customer} from "./Customer";
import {product_details} from "./ProductDetails";

@Entity()
export class product_header {

    @PrimaryGeneratedColumn()
    ph_id: number;

    @Column()
    group_id: number;

    @Column()
    order_num: number;

    @ManyToOne(() => customer, (key: customer) => key.product_header)
    @JoinColumn({
        name: "customer_fk",
        referencedColumnName: "customer_id",
    })
    customer: customer;

    @OneToMany(() => product_details, (key: product_details) => key.ph)
    product_details: product_details[];

    @Column()
    status: string;

    @Column()
    crafting_required: boolean;

    @CreateDateColumn()
    created_on: Date;

    @Column()
    created_by: string;

    @UpdateDateColumn()
    updated_on: Date;

    @Column()
    updated_by: string;
}