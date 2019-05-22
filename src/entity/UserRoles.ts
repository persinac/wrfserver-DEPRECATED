import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class user_roles {

    @PrimaryGeneratedColumn()
    user_role_id: number;

    @Column()
    role_text: string;

    @Column()
    user_account_id: string;

}