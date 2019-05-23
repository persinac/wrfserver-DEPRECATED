import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import {product_header} from "./ProductHeader";
import {category} from "./Category";
import {question} from "./Question";

@Entity()
export class product_details {

  @PrimaryGeneratedColumn()
  pd_id: number;

  @ManyToOne(() => product_header, (key: product_header) => key.product_details)
  @JoinColumn({
    name: "ph_fk",
    referencedColumnName: "ph_id",
  })
  ph: product_header;

  @ManyToOne(() => category, (key: category) => key.product_details)
  @JoinColumn({
    name: "cat_fk",
    referencedColumnName: "category_id",
  })
  category: category;

  @ManyToOne(() => question, (key: question) => key.product_details)
  @JoinColumn({
    name: "q_fk",
    referencedColumnName: "q_id",
  })
  question: question;

  @Column()
  response: string;

  @CreateDateColumn()
  created_on: Date;

  @Column()
  created_by: string;

  @UpdateDateColumn()
  updated_on: Date;

  @Column()
  updated_by: string;
}