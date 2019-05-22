import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class question {

    @PrimaryGeneratedColumn()
    question_id: number;

    @Column()
    question_text: string;

    @Column()
    questions_short_name: number;

    @Column()
    question_options_fk: number;

    @Column()
    category_id: number;

    @Column()
    topic: string;

    @Column()
    tooltip: string;

    @Column()
    instructions: string;

    @Column()
    datatype: string;

    @Column()
    is_active: boolean;
}