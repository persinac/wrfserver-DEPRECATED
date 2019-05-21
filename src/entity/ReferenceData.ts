import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { reference_keys } from './ReferenceKeys';

@Entity()
export class reference_data {

  @PrimaryGeneratedColumn()
  rd_id: number;

  @ManyToOne(() => reference_keys, (key: reference_keys) => key.rk_id)
  rk_fk: number;

  @Column()
  is_active: boolean;

  @Column()
  created_on: Date;

  @Column()
  created_by: string;

  @Column()
  updated_on: Date;

  @Column()
  updated_by: string;
}