import { Component, Input } from '@angular/core';
import { SensorDto } from 'src/app/Dtos/SensorDto';
import { Sensor } from 'src/app/Interfaces/Sensor';

@Component({
  selector: 'app-tarjeta-sensor',
  standalone:true,
  imports: [],
  templateUrl: './tarjeta-sensor.component.html',
  styleUrl: './tarjeta-sensor.component.scss'
})
export class TarjetaSensorComponent {
  // @Input() imagenUrl:string="../assets/imagenes/iconSensor1.png"
  // @Input() nombre:string="Temperatura";
  // @Input() nroLecturasOK:number=100;
  // @Input() nroAlertasMedias:number=20;
  // @Input() nroAlertasRojas:number=3;
  //  @Input() sensor:SensorDto=new SensorDto(1,"Temperatura","../assets/imagenes/iconSensor1.png",100,20,3);
   @Input()sensor?:Sensor;

   getImagenUrl(nombreSensor:string):string{
      return "../assets/imagenes/iconSensor1.png";
   }

}
