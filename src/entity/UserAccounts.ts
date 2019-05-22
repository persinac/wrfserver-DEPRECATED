import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class user_accounts {

    @PrimaryGeneratedColumn()
    user_account_id: number;

    @Column()
    role_text: string;

}