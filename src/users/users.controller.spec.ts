import { createConnection } from 'typeorm';
import { UsersController } from './users.controller';
import { Users } from './users.entity';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const connection = await createConnection('test');
    const repository = connection.getRepository(Users);
    usersService = new UsersService(repository);
    controller = new UsersController(usersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
