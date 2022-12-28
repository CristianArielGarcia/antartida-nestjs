import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MedicionCreateDTO } from 'src/Dtos/Medicion/medicion.dto';

@Controller('Mediciones')
export class MedicionesController {
  @Get()
  findAll(): string {
    return 'Devuelvo todas las mediciones';
  }
  @Get(':id')
  findById(@Param('id') id: number): string {
    return `Medicion con el siguiente id #${id}`;
  }
  @Post()
  createOne(@Body() medicion: MedicionCreateDTO): MedicionCreateDTO {
    return medicion;
  }
}
