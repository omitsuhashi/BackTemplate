import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './users.dto';
import { Users } from './users.entity';
import IUserService from './users.service.interface';

@Controller('users')
export class UsersController {
    constructor(
        @Inject('USERS') private readonly usersService: IUserService
    ) {}

    @Post()
    async createUser(@Body() dto: CreateUserDto): Promise<Users> {
        return await this.usersService.create(dto);
    }

    @Get(':email')
    async getUser(@Param('email') email: string): Promise<Users> {
        return await this.usersService.getByEmail(email);
    }
}
