import {Get} from '@nestjs/common';
import { ControllerBaseBase } from './controller.base.base';
export class ControllerBase extends ControllerBaseBase {
    protected controllerBaseString = 'How are you?';
  @Get()
  getHowAreYou(): string {
    return this.controllerBaseString;
  }
}