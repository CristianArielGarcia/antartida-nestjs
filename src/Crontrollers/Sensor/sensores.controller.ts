import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import {
  CreateSensorDTO,
  Sensor,
  UpdateSensorDTO,
} from 'src/Dtos/Sensor/sensor.dto';

@Controller('Sensores')
export class SensorController {
  @Get()
  @HttpCode(200)
  // findAll(@Res({ passthrough: true }) sensores: any): string {
  //tipar los sensores
  findAll(): string {
    return 'Aca devuelvo todos los sensores';
  }
  @Get(':id')
  findOne(@Param('id') id: number): string {
    return `This return a #${id} sensor`;
  }
  @Get(':fechaLectura')
  findByFechaLectura(@Param('fechaLectura') fechaLectura: string): string {
    return `Lista de sensores con lecturas en: #${fechaLectura} `;
  }
  @Post()
  createOne(@Body() sensor: CreateSensorDTO): CreateSensorDTO {
    return sensor;
  }
  @Put()
  updateOne(@Body() sensor: UpdateSensorDTO): UpdateSensorDTO {
    return sensor;
  }
  @Delete(':id')
  removeOne(@Param('id') id: number): number {
    return id;
  }
}
