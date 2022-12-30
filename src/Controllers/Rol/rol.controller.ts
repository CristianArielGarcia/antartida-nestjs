import { Controller, Get } from '@nestjs/common';

@Controller('Rol')
export class RolController {
  @Get()
  findAll(): string {
    return 'Devuelvo todos los roles';
  }
}
