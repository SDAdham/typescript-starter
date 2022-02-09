import { Injectable } from '@nestjs/common';
import { ServiceBase } from './service.base';

@Injectable()
export class AppService extends ServiceBase {
  getHello(): string {
    return 'Hello World!';
  }
}
