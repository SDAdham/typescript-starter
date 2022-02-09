import {Get} from '@nestjs/common';
export class ControllerBaseBase {

    private helloWorld = 'Hello world!';

  @Get('helloworld')
  getHelloWorld(): string {
    return this.helloWorld;
  }
}