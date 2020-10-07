import { Module, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

const repositories = TypeOrmModule.forFeature([
  Users
]);

const usersServiceProvider: Provider = {
  provide: 'USERS',
  useClass: UsersService,
}

@Module({
  imports: [repositories],
  providers: [usersServiceProvider],
  controllers: [UsersController],
})
export class UsersModule {}
