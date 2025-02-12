import { Component, Input } from '@angular/core';
import { Planta } from 'src/app/Interfaces/Planta';
import { Sensor } from 'src/app/Interfaces/Sensor';
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
  planta:Planta|null=null;
  sensores:Sensor[]=[];

  constructor(private service:DetallePlantaService){
    service.sensores.subscribe(sen=>this.sensores=sen);
    service.planta.subscribe(p=>this.planta=p);
    service.seleccionado.subscribe(s=>this.seleccionado=s);
  }

  getBanderaUrl(nombrePais:string):string{
    return this.service.getBanderaUrl(nombrePais);
  }
}
