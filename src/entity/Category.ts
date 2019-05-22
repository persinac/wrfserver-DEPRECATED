import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class category {

    @PrimaryGeneratedColumn()
    category_id: number;

    @Column()
    category: string;
}