
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [FormsModule],
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
    iniciarSesion(form:NgForm){
        console.log(form.value.contracenia)
    }
}
