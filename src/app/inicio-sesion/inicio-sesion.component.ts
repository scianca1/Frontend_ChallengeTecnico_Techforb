
import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.scss'
})
export class InicioSesionComponent {
    ver=false;
    value:String="";

    setInputContracenia(){
     const input = document.getElementById("contracenia");
     if((input as HTMLInputElement).type==="password"){
        (input as HTMLInputElement).type = "text"
     }else{
      (input as HTMLInputElement).type = "password"
     }
    }
}
