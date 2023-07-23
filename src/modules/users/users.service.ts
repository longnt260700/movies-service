import { Injectable } from '@nestjs/common';
import { User } from '../entities';
import { FindConditions } from 'typeorm';
import { UsersRepository } from './repo/users.repository';

@Injectable()
export class UsersService {
    constructor(
        private userRepository: UsersRepository,
    ) {}

    async findOneRaw(params: FindConditions<User>) {
        return await this.userRepository.findOneRaw(params);
    }
}
