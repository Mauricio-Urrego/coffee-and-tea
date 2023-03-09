import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coffee, Tea } from './code-challenge.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
    @InjectRepository(Tea)
    private readonly teaRepository: Repository<Tea>,
  ) {}

  async findAllCoffees(): Promise<Coffee[]> {
    return this.coffeeRepository.find();
  }

  async findOneCoffee(id: number): Promise<Coffee> {
    return this.coffeeRepository.findOne(id);
  }

  async findAllTeas(): Promise<Tea[]> {
    return this.teaRepository.find();
  }

  async findOneTea(id: number): Promise<Tea> {
    return this.teaRepository.findOne(id);
  }
}
