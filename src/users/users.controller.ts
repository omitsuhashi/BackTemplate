import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './users.dto';
import { Users } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
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
