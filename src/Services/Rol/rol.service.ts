import { Injectable } from '@nestjs/common';

@Injectable()
export class RolService {
  getAll(): string {
    return 'Devuelvo todos los roles';
  }
}
