import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MedicionCreateDTO } from 'src/DTOs/Medicion/medicion.dto';
import { MedicionService } from 'src/Services/Medicion/medicion.service';

@Controller('Mediciones')
export class MedicionesController {
  constructor(private readonly medicionService: MedicionService) {}
  @Get()
  findAll(): string {
    return this.medicionService.getAll();
  }
  @Get(':id')
  findById(@Param('id') id: number): string {
    return this.medicionService.getById(id);
  }
  @Post()
  createOne(@Body() medicion: MedicionCreateDTO): MedicionCreateDTO {
    return this.medicionService.create(medicion);
  }
}
