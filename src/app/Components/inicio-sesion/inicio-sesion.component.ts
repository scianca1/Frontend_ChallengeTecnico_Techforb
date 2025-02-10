
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
