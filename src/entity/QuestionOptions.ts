import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne, JoinColumn
} from 'typeorm';
import {question} from "./Question";

@Entity()
export class question_options {

  @PrimaryGeneratedColumn()
  qo_id: number;

  @ManyToOne(() => question, (key: question) => key.question_options)
  @JoinColumn({
    name: "q_fk",
    referencedColumnName: "q_id",
  })
  question: question;

  @Column()
  text: string;

  @Column()
  sequence: number;

  @Column()
  is_active: boolean;

  @CreateDateColumn()
  created_on: Date;

  @Column()
  created_by: string;

  @UpdateDateColumn()
  updated_on: Date;

  @Column()
  updated_by: string;
}