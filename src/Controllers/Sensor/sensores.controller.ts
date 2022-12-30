import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateSensorDTO, UpdateSensorDTO } from 'src/DTOs/Sensor/sensor.dto';
import { SensorService } from 'src/Services/Sensor/sensor.service';

@Controller('Sensores')
export class SensorController {
  constructor(private readonly sensorService: SensorService) {}
  @Get()
  @HttpCode(200)
  // findAll(@Res({ passthrough: true }) sensores: any): string {
  //tipar los sensores
  findAll(): string {
    return this.sensorService.getAllSensores();
  }
  @Get(':id')
  findOne(@Param('id') id: number): string {
    return this.sensorService.getById(id);
  }
  @Get(':fechaLectura')
  findByFechaLectura(@Param('fechaLectura') fechaLectura: string): string {
    return this.sensorService.getByFechaLectura(fechaLectura);
  }
  @Post()
  createOne(@Body() sensor: CreateSensorDTO): CreateSensorDTO {
    return this.sensorService.create(sensor);
  }
  @Put()
  updateOne(@Body() sensor: UpdateSensorDTO): UpdateSensorDTO {
    return this.sensorService.update(sensor);
  }
  @Delete(':id')
  removeOne(@Param('id') id: number): number {
    return this.sensorService.delete(id);
  }
}
