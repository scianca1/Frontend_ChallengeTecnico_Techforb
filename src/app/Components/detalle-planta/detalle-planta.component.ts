import { Component, Input } from '@angular/core';
import { PlantaDto } from 'src/app/Dtos/PlantaDto';
import { SensorDto } from 'src/app/Dtos/SensorDto';
import { DetallePlantaService } from 'src/app/Services/detalle-planta.service';
import { TarjetaSensorComponent } from '../tarjeta-sensor/tarjeta-sensor.component';

@Component({
  selector: 'app-detalle-planta',
  standalone: true,
  imports: [TarjetaSensorComponent],
  templateUrl: './detalle-planta.component.html',
  styleUrl: './detalle-planta.component.scss'
})
export class DetallePlantaComponent {
  seleccionado:boolean=false;
  planta:PlantaDto=new PlantaDto(1,"Brasil","sao Pablo",500,233,33,"../assets/imagenes/BanderaBrasil.png");
  sensores:SensorDto[]=[new SensorDto(1,"Temperatura","../assets/imagenes/iconSensor1.png",200,20,3)];

  constructor(private service:DetallePlantaService){
    service.sensores.subscribe(sen=>this.sensores=sen);
    service.planta.subscribe(p=>this.planta=p);
    service.seleccionado.subscribe(s=>this.seleccionado=s);
  }
}
