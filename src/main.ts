import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function main() {
  const app = await NestFactory.create(AppModule); //? Crea aplicación de nest
  await app.listen(3000); //? Puerto por defecto / modificable
}
main();
