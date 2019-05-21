import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {reference_data} from "./ReferenceData";

@Entity()
export class reference_keys {

  @PrimaryGeneratedColumn()
  rk_id: number;

  @OneToMany(() => reference_data, (ref_data: reference_data) => ref_data.rk_fk)
  ref_data: reference_data[];

  @Column()
  name: string;

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