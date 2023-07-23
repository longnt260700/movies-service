import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { SPEC_KEY } from 'src/constants/base.constant';
import { UserType } from 'src/enums';
import { RequestHeadersEnum } from 'src/enums/base.enum';
import { ErrorHelper } from 'src/helpers/error.utils';
import { TokenHelper } from 'src/helpers/token.helper';
import { IAuthReflexPermission, IGenerateJWT } from 'src/interfaces/auth.interface';
import { AuthService } from 'src/modules/auth/auth.service';
import { ProjectConfigService } from 'src/shared/config/config.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly configService: ProjectConfigService,
    private readonly authService: AuthService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<any> {
    const specs = this.reflector.getAllAndOverride<IAuthReflexPermission>(SPEC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    
    const req = context.switchToHttp().getRequest();
    const authorization = req.headers[RequestHeadersEnum.Authorization] || String(req.cookies.JWT);
    const user = await this.verifyAccessToken(authorization);

    // apply user property to request
    req.user = user;

    const { specs: spec, isOnly } = specs;
    if (!spec) {
      return true;
    }

    const { user_type } = user;
    if (isOnly) {
      return spec.includes[user_type];
    }
    return this.checkPermission(spec, user_type);
  }

  checkPermission(spec: UserType[], role: UserType) {
    if (!spec || spec.includes(UserType.PUBLIC)) {
      return true;
    }

    return spec.includes(role);
  }

  async verifyAccessToken(authorization: string) {
    const [bearer, accessToken] = authorization.split(' ');
    if (bearer == 'Bearer' && accessToken != '') {
      const payload = TokenHelper.verify<IGenerateJWT>(accessToken, this.configService.accessTokenSecret);
      const user = await this.authService.verifyUser(payload.id);
      if (!user) {
        ErrorHelper.UnauthorizedException('Unauthorized Exception');
      }
      return user;
    } else {
      return { user_type: UserType.PUBLIC };
    }
  }
}
