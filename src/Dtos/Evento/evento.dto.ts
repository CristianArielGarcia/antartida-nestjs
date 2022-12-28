import { Sensor } from '../Sensor/sensor.dto';
import { Usuario } from '../Usuario/usuario.dto';

class TipoEvento {
  nombre: string;
  deleted: boolean;
}

export class Evento {
  tituloEvento: string;
  descripcion: string;
  usuario: Usuario;
  sensor: Sensor;
  fechaEvento: Date;
  tipoEvento: TipoEvento;
  deleted: boolean;
}
