import { createConnection, Repository } from 'typeorm';
import { CreateUserDto } from './users.dto';
import { Users } from './users.entity';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let repository: Repository<Users>;

  beforeAll(async () => {
    const connection = await createConnection('test');
    repository = connection.getRepository(Users);
    service = new UsersService(repository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create user', async () => {
    const mail = 'should_create@gmail.com';
    const userDto = new CreateUserDto();
    userDto.email = mail;
    await service.create(userDto);
    let isExist = await service.exists(mail);
    expect(isExist).toBe(true);
    const createdUser = await service.getByEmail(mail);
    await service.remove(createdUser.id);
    isExist = await service.exists(mail);
    expect(isExist).toBe(false);
  });
  it('should alert duplicate and not created', async () => {
    const mail = 'should_duplicate@gmail.com';
    const user = new CreateUserDto();
    user.email = mail;
    await service.create(user);
    const res = await service.create(user);
    expect(res.id).toBe(-1);
  })

  afterAll(async () => {
    await repository.clear();
  });
});
