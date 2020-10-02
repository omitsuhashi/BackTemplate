import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

const repositories = TypeOrmModule.forFeature([
  Users
]);

@Module({
  imports: [repositories],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
