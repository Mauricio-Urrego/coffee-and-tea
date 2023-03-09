import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coffee } from '../code-challenge/code-challenge.entity';

@Injectable()
export class CoffeeSeeder {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}

  async seed() {
    const coffees = [
      {
        title: 'GEPA Chiapas with two lines',
        imageUrl: '/images/1.png',
        type: 'Arabic',
      },
      {
        title: 'GEPA Chiapas with two lines',
        imageUrl: '/images/2.png',
        type: 'Robusta',
      },
      {
        title: 'GEPA Chiapas with two lines',
        imageUrl: '/images/3.png',
        type: 'Arabic',
      },
      {
        title: 'GEPA Chiapas with two lines',
        imageUrl: '/images/4.png',
        type: 'Robusta',
      },
      {
        title: 'GEPA Chiapas with two lines',
        imageUrl: '/images/5.png',
        type: 'Robusta',
      },
      {
        title: 'GEPA Chiapas with two lines',
        imageUrl: '/images/6.png',
        type: 'Arabic',
      },
      {
        title: 'GEPA Chiapas with two lines',
        imageUrl: '/images/7.png',
        type: 'Robusta',
      },
      {
        title: 'GEPA Chiapas with two lines',
        imageUrl: '/images/8.png',
        type: 'Arabic',
      },
    ];

    for (const coffee of coffees) {
      const { title, imageUrl, type } = coffee;
      const coffeeEntity = this.coffeeRepository.create({
        title,
        imageUrl,
        type,
      });
      await this.coffeeRepository.save(coffeeEntity);
    }
  }
}
