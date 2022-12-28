import { Sensor } from '../Sensor/sensor.dto';

export class Lectura {
  id: number;
  sensor: Sensor;
  fechaLectura: Date;
  infoAdicional: string;
  deleted: boolean;
}
export class LecturaCreateDTO {
  id: number;
  sensor: Sensor;
  fechaLectura: Date;
  infoAdicional: string;
  deleted: boolean;
}
