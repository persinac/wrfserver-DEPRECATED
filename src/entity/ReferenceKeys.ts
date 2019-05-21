import {Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn} from 'typeorm';
import {reference_data} from "./ReferenceData";

@Entity()
export class reference_keys {

  @PrimaryGeneratedColumn()
  rk_id: number;

  @OneToMany(() => reference_data, (ref_data: reference_data) => ref_data.rk_fk)
  ref_data: reference_data[];

  @Column()
  short_name: string;

  @Column()
  long_name: string;

  @Column()
  is_active: boolean;

  @CreateDateColumn()
  created_on: Date;

  @Column()
  created_by: string;

  @CreateDateColumn()
  updated_on: Date;

  @Column()
  updated_by: string;
}