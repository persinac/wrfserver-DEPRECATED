import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class product_header {

    @PrimaryGeneratedColumn()
    ph_id: number;

    @Column()
    group_id: number;

    @Column()
    order_num: number;

    @Column()
    customer_fk: number;

    @Column()
    state: string;
}