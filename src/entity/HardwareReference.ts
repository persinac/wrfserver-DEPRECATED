import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity()
export class hardware_reference_data {

  @PrimaryGeneratedColumn()
  hw_id: number;

  @Column()
  short_name: string;

  @Column()
  long_name: string;

  @Column()
  sku: string;

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