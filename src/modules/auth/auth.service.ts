import { Injectable } from '@nestjs/common';
import { ProjectConfigService } from 'src/shared/config/config.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(private configService: ProjectConfigService, private userService: UsersService) {}

    async verifyUser(id: number) {
        return this.userService.findOneRaw({ id, deleted_at: null });
    }
}
