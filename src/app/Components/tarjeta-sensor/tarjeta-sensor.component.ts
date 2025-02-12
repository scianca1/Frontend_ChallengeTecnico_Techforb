import { Component, Input } from '@angular/core';
import { Sensor } from 'src/app/Interfaces/Sensor';

@Component({
  selector: 'app-tarjeta-sensor',
  standalone:true,
  imports: [],
  templateUrl: './tarjeta-sensor.component.html',
  styleUrl: './tarjeta-sensor.component.scss'
})
export class TarjetaSensorComponent {
   @Input()sensor?:Sensor;

   getImagenUrl(nombreSensor:string):string{
      let nombre:string=nombreSensor.replace(/\s/g,"");
      return "../assets/imagenes/"+nombre+".png";
   }

}
