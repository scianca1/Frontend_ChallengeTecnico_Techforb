import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { ErrorService } from 'src/app/Services/error.service';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {
  textButtonRegister="Registrarse";
  error="";
  loginForm!:FormGroup;
  constructor(private ServiceAuth:AuthService,private fb:FormBuilder,private serviceError:ErrorService){
    this.serviceError.error.subscribe(e=>this.error=e);
  }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      usuario:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      RepetirPassword:['',[Validators.required,Validators.minLength(8)]]
    });
  }

  async registrarse(){
    if(this.loginForm.invalid){
      this.markAllAsTouched();
      this.error='Alguno de los campos no cumple con los requerimientos';
      console.log(this.error);
      return;
    }
    const {usuario,email,password,RepetirPassword}= this.loginForm.value;
    try{
      const RegistroExitoso= await this.ServiceAuth.register(usuario,email,password,RepetirPassword);
      console.log(RegistroExitoso);
      if(!RegistroExitoso){
        this.error='Alguno de los campos No cumple con los criterios';
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
   private markAllAsTouched(){
    Object.keys(this.loginForm.controls).forEach(field=>{
      const control=this.loginForm.get(field);
      control?.markAsTouched({onlySelf:true});
    })
  }

}
