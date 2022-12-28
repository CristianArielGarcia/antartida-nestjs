import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventoController } from './Crontrollers/evento/evento.controller';
import { SensorController } from './Crontrollers/Sensor/sensores.controller';

@Module({
  imports: [],
  controllers: [AppController, EventoController, SensorController],
  providers: [AppService],
})
export class AppModule {}
