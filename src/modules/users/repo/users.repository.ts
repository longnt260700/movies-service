import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'src/base';
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../../entities';

@EntityRepository(User)
export class UsersRepository extends BaseRepository<User> {
  constructor(@InjectRepository(User) readonly userModel: Repository<User>) {
    super(userModel);
  }
}
