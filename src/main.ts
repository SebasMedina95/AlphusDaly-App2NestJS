import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function main() {

  //? Entrada de la aplicación
  const app = await NestFactory.create(AppModule);

  //? Alias de la aplicación
  app.setGlobalPrefix('api-alphus/v1');

  //? Configuración global
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true
      }
    })
  );
  
  //? Configuración del cors
  app.enableCors();

  //? Configuración de puerto
  await app.listen( process.env.PORT );
  console.log(`La APP ALPHUS DALY está corriendo en puerto ${process.env.PORT}`);
}

main();