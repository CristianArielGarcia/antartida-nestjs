import { Injectable } from '@nestjs/common';
import { UsuarioCreateDTO, UsuarioEditDTO } from 'src/DTOs/Usuario/usuario.dto';

@Injectable()
export class UsuarioService {
  getAll(): string {
    return 'Aca devuelvo todos los usuarios ';
  }
  getById(id: number): string {
    return `Id del usuario que busco #${id}`;
  }
  create(usuario: UsuarioCreateDTO): UsuarioCreateDTO {
    return usuario;
  }
  update(usuario: UsuarioEditDTO): UsuarioEditDTO {
    return usuario;
  }
}
