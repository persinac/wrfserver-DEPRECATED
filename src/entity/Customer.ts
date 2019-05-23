import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany} from 'typeorm';
import {product_header} from "./ProductHeader";

@Entity()
export class customer {

  @PrimaryGeneratedColumn()
  customer_id: number;

  @OneToMany(() => product_header, (product: product_header) => product.customer)
  product_header: product_header[];

  @Column()
  name: string;

  @Column()
  primary_email: string;

  @Column({
    default: ""
  })
  secondary_email: string;

  @Column({
    default: ""
  })
  phone_number: string;

  @Column({
    default: ""
  })
  shipping_address: string;

  @CreateDateColumn()
  created_on: Date;

  @Column()
  created_by: string;

  @UpdateDateColumn()
  updated_on: Date;

  @Column()
  updated_by: string;
}