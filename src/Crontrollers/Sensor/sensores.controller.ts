import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { CreateSensorDTO } from 'src/Dtos/Sensor/sensor.dto';

@Controller('Sensores')
export class SensorController {
  @Get()
  @HttpCode(200)
  //tipar los sensores
  findAll(@Res({ passthrough: true }) sensores: any): string {
    return 'Aca devuelvo todos los sensores';
  }
  @Get(':id')
  findOne(@Param('id') id: number): string {
    return `This return a #${id} sensor`;
  }
  @Post()
  createOne(@Body() sensor: CreateSensorDTO): boolean {
    return true;
  }
}
