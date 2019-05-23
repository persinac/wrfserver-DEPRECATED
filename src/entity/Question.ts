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

  @OneToMany(() => question_options, (qo: question_options) => qo.question)
  question_options: question_options[];

  @OneToMany(() => product_details, (pd: product_details) => pd.question)
  product_details: product_details[];

  @ManyToOne(() => category, (key: category) => key.question)
  @JoinColumn({
    name: "cat_fk",
    referencedColumnName: "category_id",
  })
  category: category;
}