import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';



require('dotenv').config();

console.log(process.env);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}
bootstrap();
