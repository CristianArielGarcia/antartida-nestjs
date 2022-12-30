import { Injectable } from '@nestjs/common';

@Injectable()
export class EventoService {
  getAll(): string {
    return 'Aca devuelvo todos los enevntos';
  }
}
