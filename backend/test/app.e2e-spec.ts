import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('http://localhost:4000/')
      .expect(200)
      .expect('');
  });

  it('/code-challenge/coffees (GET)', () => {
    return request(app.getHttpServer())
      .get('/code-challenge/coffees')
      .expect(200)
      .expect([]);
  });

  it('/code-challenge/coffees/:id (GET)', async () => {
    const response = await request(app.getHttpServer())
      .get('/code-challenge/coffees/1')
      .expect(200);
    expect(response.body).toEqual({
      id: 1,
      title: 'GEPA Chiapas with two lines',
      imageUrl: '/images/1.png',
      type: 'Arabic',
    });
  });

  it('/code-challenge/teas (GET)', () => {
    return request(app.getHttpServer())
      .get('/code-challenge/teas')
      .expect(200)
      .expect([]);
  });

  it('/code-challenge/teas/:id (GET)', async () => {
    const response = await request(app.getHttpServer())
      .get('/code-challenge/teas/1')
      .expect(200);
    expect(response.body).toEqual({
      id: 1,
      title: 'Green tea',
      imageUrl: '/images/tea1.png',
      type: 'Green',
    });
  });
});
