import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class question_options {

    @PrimaryGeneratedColumn()
    question_options_id: number;

    @Column()
    question_id_fk: number;

    @Column()
    optionText: string;

    @Column()
    sequence: number;

}