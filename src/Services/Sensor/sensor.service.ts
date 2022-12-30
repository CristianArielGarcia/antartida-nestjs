import { Injectable } from '@nestjs/common';
import { CreateSensorDTO, UpdateSensorDTO } from 'src/Dtos/Sensor/sensor.dto';

@Injectable()
export class SensorService {
  getAllSensores(): string {
    return 'Aca devuelvo todos los sensores';
  }
  getById(id: number): string {
    return `This return a #${id} sensor`;
  }
  getByFechaLectura(fechaLectura: string) {
    return `Lista de sensores con lecturas en: #${fechaLectura} `;
  }
  create(sensor: CreateSensorDTO): CreateSensorDTO {
    return sensor;
  }
  update(sensor: UpdateSensorDTO): UpdateSensorDTO {
    return sensor;
  }
  delete(id: number): number {
    return id;
  }
}
