import {Get} from '@nestjs/common';
export class ControllerBaseBase {

    private helloWorld = 'Hello world!';

  @Get()
  getHelloWorld(): string {
    return this.helloWorld;
  }
}