import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tea } from '../code-challenge/code-challenge.entity';

@Injectable()
export class TeaSeeder {
  constructor(
    @InjectRepository(Tea)
    private readonly teaRepository: Repository<Tea>,
  ) {}

  async seed() {
    const teas = [
      {
        title: 'GEPA Chiapas',
        imageUrl: '/images/tea1.png',
        type: '',
      },
      {
        title: 'GEPA Chiapas with two lines',
        imageUrl: '/images/tea2.png',
        type: '',
      },
      {
        title: 'GEPA Chiapas with two lines',
        imageUrl: '/images/tea3.png',
        type: '',
      },
      {
        title: 'GEPA Chiapas with two lines',
        imageUrl: '/images/tea4.png',
        type: '',
      },
      {
        title: 'GEPA Chiapas with two lines',
        imageUrl: '/images/tea5.png',
        type: '',
      },
      {
        title: 'GEPA Chiapas with two lines',
        imageUrl: '/images/tea6.png',
        type: '',
      },
      {
        title: 'GEPA Chiapas with two lines',
        imageUrl: '/images/tea7.png',
        type: '',
      },
      {
        title: 'GEPA Chiapas with two lines',
        imageUrl: '/images/tea8.png',
        type: '',
      },
    ];

    for (const tea of teas) {
      const { title, imageUrl, type } = tea;
      const teaEntity = this.teaRepository.create({
        title,
        imageUrl,
        type,
      });
      await this.teaRepository.save(teaEntity);
    }
  }
}
