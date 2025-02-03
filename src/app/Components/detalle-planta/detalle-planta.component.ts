import { Component, Input } from '@angular/core';
import { SensorDto } from 'src/app/Dtos/SensorDto';
import { TarjetaSensorComponent } from '../tarjeta-sensor/tarjeta-sensor.component';

@Component({
  selector: 'app-detalle-planta',
  standalone: true,
  imports: [TarjetaSensorComponent],
  templateUrl: './detalle-planta.component.html',
  styleUrl: './detalle-planta.component.scss'
})
export class DetallePlantaComponent {
  @Input() nombrePlanta="Argentina,Quilmes";
  @Input() seleccionado:boolean=true;
  @Input() banderaUrl="../assets/imagenes/BanderaArgentina.png"
  @Input() sensores:SensorDto[]=[new SensorDto(1,"Temperatura","../assets/imagenes/iconSensor1.png",200,20,3)];
}
