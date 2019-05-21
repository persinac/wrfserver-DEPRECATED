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

  @ManyToOne(type => product_header, product_header => product_header.ph_id)
  @JoinColumn({
    name: "ph_fk",
    referencedColumnName: "ph_id",
  })
  ph: product_header;

  @ManyToOne(() => category, (key: category) => key.category_id)
  @JoinColumn({
    name: "cat_fk",
    referencedColumnName: "category_id",
  })
  cat_fk: number;

  @ManyToOne(() => question, (key: question) => key.q_id)
  @JoinColumn({
    name: "q_fk",
    referencedColumnName: "q_id",
  })
  q_fk: number;

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