import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsuarioCreateDTO, UsuarioEditDTO } from 'src/DTOs/Usuario/usuario.dto';
import { UsuarioService } from 'src/Services/Usuario/usuario.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuarioService: UsuarioService) {}
  @Get()
  @HttpCode(200)
  findAll(): string {
    return this.usuarioService.getAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number): string {
    return this.usuarioService.getById(id);
  }
  @Post()
  createOne(@Body() usuario: UsuarioCreateDTO): UsuarioCreateDTO {
    return this.usuarioService.create(usuario);
  }
  @Put()
  updateOne(@Body() usuario: UsuarioEditDTO): UsuarioEditDTO {
    return this.usuarioService.update(usuario);
  }
}
