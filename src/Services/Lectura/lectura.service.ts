import { Injectable } from '@nestjs/common';
import { LecturaCreateDTO } from 'src/Dtos/Lectura/lectura.dto';

@Injectable()
export class LecturaService {
  getById(id: number): string {
    return `Lectura con el siguiente id: #${id}`;
  }
  getByIdSensor(idSensor: number): string {
    return `Devuelvo las lecturas del sensor con id: #${idSensor}`;
  }
  create(lectura: LecturaCreateDTO): LecturaCreateDTO {
    return lectura;
  }
}
