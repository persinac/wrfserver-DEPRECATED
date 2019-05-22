import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class product_details {

    @PrimaryGeneratedColumn()
    detail_id: number;

    @Column()
    ph_id_fk: number;

    @Column()
    group_id_fk: number;

    @Column()
    category_id_fk: number;

    @Column()
    response: string;

    @Column()
    question_id_fk: number;
}