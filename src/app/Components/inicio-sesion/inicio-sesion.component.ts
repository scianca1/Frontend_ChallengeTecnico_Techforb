
import { ThisReceiver } from '@angular/compiler';
import {  Component, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators} from '@angular/forms';
import { throwError } from 'rxjs';
import { AuthHooks } from 'src/app/Hooks/AuthHooks';
import { AuthService } from 'src/app/Services/auth.service';
import { ErrorService } from 'src/app/Services/error.service';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.scss'
})
@Injectable({
  providedIn: 'root'
})
export class InicioSesionComponent {
    ver=false;
    value:String="";
    error:string="";
  

   loginForm!:FormGroup;

    constructor(private hooks:AuthHooks,private service:AuthService,private fb:FormBuilder, private errorservice:ErrorService){
      errorservice.error.subscribe(e=>this.error=e);
    }
    ngOnInit(): void {
      this.loginForm=this.fb.group({
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(8)]]
      });
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
    // iniciarSesion(form:NgForm){
    //   let email= form.value.email;
    //   let contracenia= form.value.contracenia;
    //   const inputEmail=document.getElementById("email");
    //   const inputError=document.getElementById("error");
    //   const inputContracenia = document.getElementById("contracenia");
    //   inputEmail?.addEventListener("input",(event)=>{
    //     if((event.target as HTMLInputElement).value!=""){
    //       (event.target as HTMLInputElement).style.border = "1px solid rgba(220, 219, 221, 1)";
    //     }else{
    //       (event.target as HTMLInputElement).style.border = "1px solid rgb(255 0 0 / 79%)";
    //     }
    //   })
    //   inputContracenia?.addEventListener("input",(event)=>{
    //     if((event.target as HTMLInputElement).value.length>8){
    //       (event.target as HTMLInputElement).style.border = "1px solid rgba(220, 219, 221, 1)";
    //     }else{
    //       (event.target as HTMLInputElement).style.border = "1px solid rgb(255 0 0 / 79%)";
    //     }
    //   })
      
    //   if(email!=""&&contracenia!=""){
    //     // if(!this.hooks.login(email,contracenia)){
    //       this.hooks.login(email,contracenia).then((resultado)=>{
    //         if(!resultado){
    //           (inputEmail as HTMLInputElement).style.border = "1px solid rgb(255 0 0 / 79%)";
    //           (inputContracenia as HTMLInputElement).style.border = "1px solid rgb(255 0 0 / 79%)";
    //           this.error="Parece que el usuario o la contraceña no son correctos";
    //           (inputError as HTMLElement).style.display="block";
    //         }
    //       })
        
    //     // }
        
    //   }else if(email==""){
          
    //       (inputEmail as HTMLInputElement).style.border = "1px solid rgb(255 0 0 / 79%)";
    //       this.error="El Campo no puede estar vacio";
    //       (inputError as HTMLElement).style.display="block";
    //   }
    //   if(contracenia==""){
    //     // const input=document.getElementById("contracenia");
    //       (inputContracenia as HTMLInputElement).style.border = "1px solid rgb(255 0 0 / 79%)";
    //       this.error="El Campo no puede estar vacio, la contraceña debe contenes al menos 8 caracteres";
    //       (inputError as HTMLElement).style.display="block";
    //   }

    //     console.log(form.value.contracenia)
    // }
    async iniciarSesion(){
      
        if(this.loginForm.invalid){
          this.markAllAsTouched();
          this.error='Alguno de los campos no cumple con los requerimientos';
          console.log(this.error);
          return;
        }

        const {email,password}= this.loginForm.value;
        try{
          const loginExitoso= await this.service.login(email,password);
          console.log(loginExitoso);
          if(!loginExitoso){
            this.error='el usuario o la contraceña no son correctos';
          }
        }catch(error){
          console.log("error"+error);
          if(typeof error === "string"){
            this.error=error;
          }else if(error instanceof Error){
            this.error= error.message;
            console.log("error "+error.message);
          }else{
            this.error='hubo un problema intentalo mas tarde';
            
          }
            
        }
        
    }

    private markAllAsTouched(){
      Object.keys(this.loginForm.controls).forEach(field=>{
        const control=this.loginForm.get(field);
        control?.markAsTouched({onlySelf:true});
      })
    }
   
 
}
