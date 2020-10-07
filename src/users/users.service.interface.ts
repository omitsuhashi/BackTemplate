import { CreateUserDto } from "./users.dto";
import { Users } from "./users.entity";

export default interface IUserService {
    create(dto: CreateUserDto): Promise<Users>;
    getByEmail(email: string): Promise<Users>;
    exists(email: string): Promise<boolean>;
    remove(id: number): Promise<void>;
}