import { Lectura } from '../Lectura/lectura.dto';

class TipoMedicion {
  id: number;
  nombre: string;
  unidadDeMedida: string;
  codigoColor: string;
  deleted: boolean;
}

export class Medicion {
  id: number;
  lectura: Lectura;
  tipoMedicion: TipoMedicion;
  valor: string;
  deleted: boolean;
}
export class MedicionCreateDTO {
  lectura: Lectura;
  tipoMedicion: TipoMedicion;
  valor: string;
  deleted: boolean;
}
