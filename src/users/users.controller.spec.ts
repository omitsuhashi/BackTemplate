import { createConnection, Repository } from 'typeorm';
import { UsersController } from './users.controller';
import { CreateUserDto } from './users.dto';
import { Users } from './users.entity';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  let usersService: UsersService;
  let usersRepository: Repository<Users>;

  beforeAll(async () => {
    const connection = await createConnection('test');
    usersRepository = connection.getRepository(Users);
    usersService = new UsersService(usersRepository);
    controller = new UsersController(usersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be created user', async () => {
    const createUser = new CreateUserDto();
    createUser.email = 'create@gmail.com';
    await controller.createUser(createUser);
  });

  it('should get user', async () => {
    const mail = 'create@gmail.com'
    const user = await controller.getUser(mail);
    expect(user.email).toBe(mail);
  })

  afterAll(async ()=> {
    await usersRepository.clear();
  });
});
