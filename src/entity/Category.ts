import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany} from 'typeorm';
import {product_header} from "./ProductHeader";
import {product_details} from "./ProductDetails";
import {question} from "./Question";

@Entity()
export class category {

  @PrimaryGeneratedColumn()
  category_id: number;

  @Column()
  category: string;

  @OneToMany(() => product_details, (product: product_details) => product.category)
  product_details: product_details[];

  @OneToMany(() => question, (q: question) => q.category)
  question: question[];

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