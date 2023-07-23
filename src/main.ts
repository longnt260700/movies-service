import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { ConfigService } from '@nestjs/config';
import { ProjectConfigService } from './shared/config/config.service';
import { useContainer } from 'class-validator';
import { ValidationPipe } from './common/pipes';
import { HttpExceptionFilter } from './common/filters';
import { TransformInterceptor } from './common/interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);
  const projectConfigService = app.get(ProjectConfigService);

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan('dev'));
  app.use(express.static('public'));

  // global nest setup
  useContainer(app.select(AppModule), { fallbackOnErrors: true }); // refer: https://github.com/typestack/class-validator#using-service-container
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new TransformInterceptor());

  // prefix
  app.setGlobalPrefix(projectConfigService.baseUrlPrefix);

  // Starts listening to shutdown hooks
  app.enableShutdownHooks();
  await app.listen(configService.get<string>('SERVER_PORT'));
}
bootstrap();
