import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Soccer Bet REST Api')
    .setDescription(
      'This API defines endpoints for a soccer betting platform, allowing users to access various functionalities related to betting on soccer matches. The API provides secure access to real-time data and allows users to place bets, view match schedules, and manage their accounts.',
    )
    .setVersion('1.0')
    .addTag('soccer-bet')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3001);
}
bootstrap();
