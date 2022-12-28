import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LecturaCreateDTO } from 'src/Dtos/Lectura/lectura.dto';

@Controller('Lecturas')
export class LecturaController {
  @Get(':id')
  findById(@Param('id') id: number): string {
    return `Lectura con el siguiente id: #${id}`;
  }
  @Get('/bySensor/:idSensor')
  findAllByIdSensor(@Param('idSensor') idSensor: number): string {
    return `Devuelvo las lecturas del sensor con id: #${idSensor}`;
  }
  @Post()
  createOne(@Body() lectura: LecturaCreateDTO): LecturaCreateDTO {
    return lectura;
  }
}
