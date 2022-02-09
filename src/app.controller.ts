import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ControllerBase } from './controller.base';

@Controller()
export class AppController extends ControllerBase {
  constructor(private readonly appService: AppService) {
    super();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
