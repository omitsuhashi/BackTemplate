import { createConnection } from 'typeorm';
import { Users } from './users.entity';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const connection = await createConnection('test');
    const repository = connection.getRepository(Users);
    service = new UsersService(repository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
