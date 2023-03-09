import { NestFactory } from '@nestjs/core';
import { AppModule } from './seed/seed.module';
import { CoffeeSeeder } from './seed/coffee-seeder';
import { TeaSeeder } from './seed/tea-seeder';

async function seed() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const coffeeSeeder = app.get(CoffeeSeeder); // get instance of CoffeeSeeder
  console.log('Seeding coffee data...');
  await coffeeSeeder.seed(); // call seed method to populate database
  console.log('Coffee data seeded successfully.');

  const teaSeeder = app.get(TeaSeeder); // get instance of TeaSeeder
  console.log('Seeding tea data...');
  await teaSeeder.seed(); // call seed method to populate database
  console.log('Tea data seeded successfully.');

  await app.close();
}

seed();
