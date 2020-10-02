import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['email'])
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;
}
