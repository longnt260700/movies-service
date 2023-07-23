import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'src/base';
import { EntityRepository, Repository } from 'typeorm';
import { Car } from '../../entities';

@EntityRepository(Car)
export class CarsRepository extends BaseRepository<Car> {
  constructor(@InjectRepository(Car) readonly carModel: Repository<Car>) {
    super(carModel);
  }
}
