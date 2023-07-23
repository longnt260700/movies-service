import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from '../entities';
import { CarsRepository } from './repository/cars.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  controllers: [CarsController],
  providers: [CarsService, CarsRepository],
  exports: [CarsService, CarsRepository]
})
export class CarsModule {}
