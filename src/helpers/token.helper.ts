import * as jwt from 'jsonwebtoken';
import { AUTH_MESSAGE } from 'src/messages';

import { ErrorHelper } from './error.utils';

/**
 * Token helper
 */
export class TokenHelper {
  /**
   * Signs token helper
   * @param payload - your json object
   * @param secret - your private hash
   * @param expiresIn - seconds
   * @returns
   */
  static generate(
    payload: Record<string, any>,
    secret: string,
    expiresIn: string,
  ): {
    token: string;
    expires: number;
  } {
    const token = jwt.sign(payload, secret, {
      expiresIn: expiresIn,
    });
    const decoded = jwt.decode(token) as jwt.JwtPayload;
    return {
      token,
      expires: decoded.exp,
    };
  }

  /**
   * Verifys token helper
   * @param token
   * @param secret
   */
  static verify<T>(
    token: string,
    secret: string,
    opts?: jwt.VerifyOptions,
    tokenExpireMessage?: string,
    tokenErrorMessage?: string,
  ): T {
    try {
      const options: jwt.VerifyOptions = {
        ...opts,
        algorithms: ['HS256'],
      };
      const payload = jwt.verify(token, secret, options);
      return payload as any;
    } catch (error) {
      if (error.name === 'TokenExpiredError')
        ErrorHelper.UnauthorizedException(tokenExpireMessage || AUTH_MESSAGE.TOKEN_EXPIRE_ERROR);
      if (error.name === 'JsonWebTokenError')
        ErrorHelper.UnauthorizedException(tokenErrorMessage || AUTH_MESSAGE.TOKEN_VALID_ERROR);
      throw error;
    }
  }
}
