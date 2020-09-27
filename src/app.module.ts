import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const databaseConfig = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 8050,
  username: 'test',
  password: 'test',
  database: 'des2a',
  synchronize: true,
})

@Module({
  imports: [databaseConfig],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
