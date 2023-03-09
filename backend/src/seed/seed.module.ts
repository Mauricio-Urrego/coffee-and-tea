import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CodeChallengeController } from '../code-challenge/code-challenge.controller';
import { Coffee, Tea } from '../code-challenge/code-challenge.entity';
import { CodeChallengeModule } from '../code-challenge/code-challenge.module';
import { ProductService } from '../code-challenge/code-challenge.service';
import { CoffeeSeeder } from './coffee-seeder';
import { TeaSeeder } from './tea-seeder';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'mvst-coffee-tea-challenge-db',
      entities: [Coffee, Tea],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Coffee, Tea]),
    CodeChallengeModule,
  ],
  controllers: [CodeChallengeController],
  providers: [CoffeeSeeder, TeaSeeder, ProductService],
  exports: [ProductService],
})
export class AppModule {}
