import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsuarioCreateDTO, UsuarioEditDTO } from 'src/Dtos/Usuario/usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  @Get()
  @HttpCode(200)
  findAll(): string {
    return 'Aca devuelvo todos los usuarios ';
  }
  @Get(':id')
  findOne(@Param('id') id: number): string {
    return `Id del usuario que busco #${id}`;
  }
  @Post()
  createOne(@Body() usuario: UsuarioCreateDTO): UsuarioCreateDTO {
    return usuario;
  }
  @Put()
  updatene(@Body() usuario: UsuarioEditDTO): UsuarioEditDTO {
    return usuario;
  }
}
