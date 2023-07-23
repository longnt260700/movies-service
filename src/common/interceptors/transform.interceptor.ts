import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { URL_UPLOAD_IMAGE_CK } from 'src/constants';
import { IResponse } from 'src/interfaces/response.interface';

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, IResponse<T>> {
  intercept(context: ExecutionContext, next: CallHandler<T>): Observable<IResponse<T>> {
    const request = context.switchToHttp().getRequest(); 
    
    if (request.url === URL_UPLOAD_IMAGE_CK) {
      //@ts-ignore
      return next.handle();
    }
    return next.handle().pipe(
      map((data) => {
        return {
          success: true,
          code: context.switchToHttp().getResponse().statusCode,
          data,
          //@ts-ignore
          message: request.message || data.message,
        };
      }),
    );
  }
}
