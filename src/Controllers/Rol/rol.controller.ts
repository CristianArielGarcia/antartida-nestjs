import { Controller, Get } from '@nestjs/common';
import { RolService } from 'src/Services/Rol/rol.service';

@Controller('Rol')
export class RolController {
  constructor(private readonly rolService: RolService) {}
  @Get()
  findAll(): string {
    return this.rolService.getAll();
  }
}
