import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { c } from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(8000);
}
bootstrap();
