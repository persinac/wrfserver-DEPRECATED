import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn, OneToMany
} from 'typeorm';
import {category} from "./Category";
import {question_options} from "./QuestionOptions";
import {product_details} from "./ProductDetails";

@Entity()
export class question {

  @PrimaryGeneratedColumn()
  q_id: number;

  @OneToMany(() => question_options, (qo: question_options) => qo.qo_id)
  question_options: question_options[];

  @Column()
  text: string;

  @Column()
  short_name: string;

  @Column({
    default: ""
  })
  topic: string;

  @Column({
    default: ""
  })
  tooltip: string;

  @Column({
    default: ""
  })
  instructions: string;

  @Column()
  datatype: string;

  @ManyToOne(() => category, (key: category) => key.category_id)
  @JoinColumn({
    name: "cat_fk",
    referencedColumnName: "category_id",
  })
  cat_fk: number;

  @OneToMany(() => product_details, (key: product_details) => key.pd_id)
  product_details: product_details[];

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