import { Injectable } from '@nestjs/common';
import { ServiceBaseBase } from './service.base.base';

@Injectable()
export class ServiceBase extends ServiceBaseBase {
    /**
     * some documentation
     * @returns Some test
     */
  getWord(): string {
    return 'Hello none!';
  }
}
