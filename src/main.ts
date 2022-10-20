import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function main() {
  const app = await NestFactory.create(AppModule); //? Crea aplicación de nest

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //? Solo deja la data que se esta esperando en el dto
      forbidNonWhitelisted: true, //? Manda mensaje de erro cuando se envio un atributo extra 
    }),
  )

  await app.listen(3000); //? Puerto por defecto / modificable


}
main();
