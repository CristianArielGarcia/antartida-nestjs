import { Injectable } from '@nestjs/common';
import { MedicionCreateDTO } from 'src/DTOs/Medicion/medicion.dto';

@Injectable()
export class MedicionService {
  getAll(): string {
    return 'Devuelvo todas las mediciones';
  }
  getById(id: number): string {
    return `Medicion con el siguiente id #${id}`;
  }
  create(medicion: MedicionCreateDTO): MedicionCreateDTO {
    return medicion;
  }
}
