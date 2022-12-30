import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventoController } from './Controllers/Evento/evento.controller';
import { LecturaController } from './Controllers/Lectura/lectura.controller';
import { MedicionesController } from './Controllers/Medicion/medicion.controller';
import { RolController } from './Controllers/Rol/rol.controller';
import { SensorController } from './Controllers/Sensor/sensores.controller';
import { UsuariosController } from './Controllers/Usuario/usuario.controller';
import { EventoService } from './Services/Evento/evento.service';
import { LecturaService } from './Services/Lectura/lectura.service';
import { MedicionService } from './Services/Medicion/medicion.service';
import { RolService } from './Services/Rol/rol.service';
import { SensorService } from './Services/Sensor/sensor.service';
import { UsuarioService } from './Services/Usuario/usuario.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    EventoController,
    SensorController,
    UsuariosController,
    RolController,
    LecturaController,
    MedicionesController,
  ],
  providers: [
    AppService,
    SensorService,
    EventoService,
    LecturaService,
    MedicionService,
    RolService,
    UsuarioService,
  ],
})
export class AppModule {}
