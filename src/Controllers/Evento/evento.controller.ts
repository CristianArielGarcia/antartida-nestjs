import { Controller } from '@nestjs/common';
import { EventoService } from 'src/Services/Evento/evento.service';

@Controller('Evento')
export class EventoController {
  constructor(private readonly eventoService: EventoService) {}
  findAll() {
    return this.eventoService.getAll();
  }
}
