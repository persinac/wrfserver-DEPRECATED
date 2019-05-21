import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';
import { reference_keys } from './ReferenceKeys';

@Entity()
export class reference_data {

  @PrimaryGeneratedColumn()
  rd_id: number;

  @ManyToOne(() => reference_keys, (key: reference_keys) => key.ref_data)
  @JoinColumn({
    name: "rk_fk",
    referencedColumnName: "rk_id",
  })
  reference_keys: reference_keys;

  @Column()
  value: string;

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