import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './users.dto';
import { Users } from './users.entity';
import IUserService from './users.service.interface';

@Injectable()
export class UsersService implements IUserService {
    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>,
    ) {}

    async create(dto: CreateUserDto): Promise<Users> {
        try {
            const result = await this.usersRepository.insert(dto);
            const user = new Users(dto);
            user.id = result.identifiers[0].id;
            return user;
        } catch(e) {
            const user = new Users(dto);
            user.id = -1;
            return user;
        }
    }

    async getByEmail(email: string): Promise<Users> {
        return await this.usersRepository.findOneOrFail({where: { email }});
    }

    async exists(email: string): Promise<boolean> {
        const count = await this.usersRepository.count({where: {email}});
        return count == 1;
    }

    async remove(id: number): Promise<void> {
        const user = await this.usersRepository.findOne(id);
        await this.usersRepository.remove(user);
    }
}
