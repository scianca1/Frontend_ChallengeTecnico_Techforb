import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {

  registrarse(form:NgForm){

  }
  setInputContracenia(input:String){
    let docinput;
    if(input==="contracenia"){
      docinput = document.getElementById("contracenia");
    }else{
      docinput = document.getElementById("contraceniaRepetida");
    }
    
    if((docinput as HTMLInputElement).type==="password"){
       (docinput as HTMLInputElement).type = "text"
    }else{
     (docinput as HTMLInputElement).type = "password"
    }
   }

}
