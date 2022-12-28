export class CreateSensorDTO {
  nombre: string;
  latitud: number;
  longitud: number;
  deleted: boolean;
}

export class Sensor {
  id: number;
  nombre: string;
  latitud: number;
  longitud: number;
  deleted: boolean;
}

export class UpdateSensorDTO {
  id: number;
  nombre: string;
  latitud: number;
  longitud: number;
  deleted: boolean;
}
