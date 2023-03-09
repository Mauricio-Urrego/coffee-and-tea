import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './code-challenge.service';
import { Coffee, Tea } from './code-challenge.entity';

@Controller('code-challenge')
export class CodeChallengeController {
  constructor(private readonly productService: ProductService) {}

  @Get('coffees')
  async getCoffees(): Promise<Coffee[]> {
    return this.productService.findAllCoffees();
  }

  @Get('coffees/:id')
  async getCoffee(@Param('id') id: number): Promise<Coffee> {
    return this.productService.findOneCoffee(id);
  }

  @Get('teas')
  async getTeas(): Promise<Tea[]> {
    return this.productService.findAllTeas();
  }

  @Get('teas/:id')
  async getTea(@Param('id') id: number): Promise<Tea> {
    return this.productService.findOneTea(id);
  }
}
