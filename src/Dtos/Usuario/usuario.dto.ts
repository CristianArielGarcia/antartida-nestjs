import { Rol } from '../Rol/rol.dto';

export class Usuario {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  // rol: Rol;
  deleted: boolean;
}

export class UsuarioCreateDTO {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  rol: Rol;
  deleted: boolean;
}
export class UsuarioEditDTO {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  rol: Rol;
  deleted: boolean;
}
