
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthHooks } from 'src/app/Hooks/AuthHooks';

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
    error:string="error";
    // inputEmail=document.getElementById("email");
    // inputcontracenia=document.getElementById("contracenia");

    constructor(private hooks:AuthHooks){}
    ngOnInit(): void {
      
    }
    ngOnDestroy():void{
      
    }

    setInputContracenia(){
     const inputContracenia = document.getElementById("contracenia");
     if((inputContracenia as HTMLInputElement).type==="password"){
        (inputContracenia as HTMLInputElement).type = "text"
     }else{
      (inputContracenia as HTMLInputElement).type = "password"
     }
    }
    iniciarSesion(form:NgForm){
      let email= form.value.email;
      let contracenia= form.value.contracenia;
      console.log(email+" "+contracenia)
      // console.log(this.inputEmail+" "+this.inputcontracenia);
      const inputEmail=document.getElementById("email");
      const inputError=document.getElementById("error");
      const inputContracenia = document.getElementById("contracenia");
      inputEmail?.addEventListener("input",(event)=>{
        if((event.target as HTMLInputElement).value!=""){
          (event.target as HTMLInputElement).style.border = "1px solid rgba(220, 219, 221, 1)";
        }else{
          (event.target as HTMLInputElement).style.border = "1px solid rgb(255 0 0 / 79%)";
        }
      })
      inputContracenia?.addEventListener("input",(event)=>{
        if((event.target as HTMLInputElement).value.length>8){
          (event.target as HTMLInputElement).style.border = "1px solid rgba(220, 219, 221, 1)";
        }else{
          (event.target as HTMLInputElement).style.border = "1px solid rgb(255 0 0 / 79%)";
        }
      })
      
      if(email!=""&&contracenia!=""){
        this.hooks.login(email,contracenia);
      }else if(email==""){
          
          (inputEmail as HTMLInputElement).style.border = "1px solid rgb(255 0 0 / 79%)";
          this.error="El Campo no puede estar vacio";
          (inputError as HTMLElement).style.display="block";
      }
      if(contracenia==""){
        // const input=document.getElementById("contracenia");
          (inputContracenia as HTMLInputElement).style.border = "1px solid rgb(255 0 0 / 79%)";
          this.error="El Campo no puede estar vacio, la contraceña debe contenes al menos 8 caracteres";
          (inputError as HTMLElement).style.display="block";
      }

        console.log(form.value.contracenia)
    }
    
}
