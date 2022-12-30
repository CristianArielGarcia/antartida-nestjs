import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LecturaCreateDTO } from 'src/Dtos/Lectura/lectura.dto';
import { LecturaService } from 'src/Services/Lectura/lectura.service';

@Controller('Lecturas')
export class LecturaController {
  constructor(private readonly lecturaService: LecturaService) {}
  @Get(':id')
  findById(@Param('id') id: number): string {
    return this.lecturaService.getById(id);
  }
  @Get('/bySensor/:idSensor')
  findAllByIdSensor(@Param('idSensor') idSensor: number): string {
    return this.lecturaService.getByIdSensor(idSensor);
  }
  @Post()
  createOne(@Body() lectura: LecturaCreateDTO): LecturaCreateDTO {
    return this.lecturaService.create(lectura);
  }
}
