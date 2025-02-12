import { Component, Input } from '@angular/core';
import { CartelService } from 'src/app/Services/cartel.service';
import { ErrorService } from 'src/app/Services/error.service';

@Component({
  selector: 'app-cartel-error',
  standalone:true,
  imports: [],
  templateUrl: './cartel-error.component.html',
  styleUrl: './cartel-error.component.scss'
})
export class CartelErrorComponent {
  @Input()tipo:string="error";
   Mensaje:string="";
   urlIconExito="../assets/imagenes/exitoIcon.png";
   urlIconError="../assets/imagenes/Sensoresdeshabilitados.png";

  constructor(private serviceError:ErrorService,private serviceCartel:CartelService){
    this.serviceError.error.subscribe(e=>this.Mensaje=e);
  }

  cerrarCartel(){
      this.serviceCartel.cerrar();
  }

  inicioSesion(){
    location.href="/";
  }

}
