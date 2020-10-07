import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CreateUserDto } from "./users.dto";

@Entity()
export class Users {
    constructor();
    constructor(dto: CreateUserDto);

    constructor(dto?: Partial<CreateUserDto>) {
        Object.assign(this, dto);
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    email: string;
}
