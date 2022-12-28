import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventoController } from './Crontrollers/Evento/evento.controller';
import { LecturaController } from './Crontrollers/Lectura/lectura.controller';
import { MedicionesController } from './Crontrollers/Medicion/medicion.controller';
import { RolController } from './Crontrollers/Rol/rol.controller';
import { SensorController } from './Crontrollers/Sensor/sensores.controller';
import { UsuariosController } from './Crontrollers/Usuario/usuario.controller';

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
  providers: [AppService],
})
export class AppModule {}
