import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { AuthHooks } from 'src/app/Hooks/AuthHooks';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {
  textButtonRegister="Registrarse";
  error="";
  constructor(private hooks:AuthHooks){}

  async registrarse(form:NgForm){
    let user= form.value.user;
    let email= form.value.email;
    let contracenia= form.value.contracenia;
    let repetirContracenia= form.value.contraceniaRepetida
    
    if(user!=""&&email!=""&&contracenia!=""&&repetirContracenia!=""&&contracenia==repetirContracenia&&this.esEmailValido(email)){
      try{
          const json = await firstValueFrom(this.hooks.register(user,email,contracenia,repetirContracenia));
          console.log("Json Recibido "+json);
          if(json.estatus==200||json.estatus==201){
              this.error=json.text;
              console.log(this.error);
              console.log(json);
          }else{
            this.error=json.text;
            this.textButtonRegister="Intentar Nuevamente"
            console.log(json);
            console.log(this.error);
          }
      }catch(error:any){
      //   if (error instanceof HttpErrorResponse) {
      //     this.error = error.error.text || "Ocurrió un error inesperado";
      // } else {
      //     this.error = "Error desconocido";
      //     console.log(error);
      // }
          console.log(error);
          const json = error as { estatus?:number,text?: string };
          this.error = json.text || "Ocurrió un error inesperado";
          this.textButtonRegister="Intentar Nuevamente"
              console.log(this.error);
              console.log(json);
      }
        
    }


  }
  esEmailValido(email:string):boolean{
    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
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
