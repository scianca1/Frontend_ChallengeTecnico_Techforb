import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { CartelService } from 'src/app/Services/cartel.service';
import { ErrorService } from 'src/app/Services/error.service';
import { PlantaService } from 'src/app/Services/planta.service';


@Component({
  selector: 'app-form-plantas',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-plantas.component.html',
  styleUrl: './form-plantas.component.scss'
})
export class FormPlantasComponent {
  @Input() tipo='';
  @Input()id:number=0;
  loginForm!:FormGroup;
  @Output() contenErrorExito=new EventEmitter<string>();
  paises=["ARGENTINA","BRASIL","URUGUAY","PARAGUAY"];

  constructor(private fb:FormBuilder,private serviceCartel:CartelService,private servicePlanta:PlantaService,private serviceError:ErrorService){}

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      nombre:['',[Validators.required]],
      pais:['',[Validators.required,this.paisValido(this.paises)]]
    });
  }

  async crearPlanta(){
    if(this.loginForm.valid){
      const {nombre,pais}= this.loginForm.value;
      try{
        const plantaCreada= await this.servicePlanta.crearPlanta(nombre,pais);
        if(!plantaCreada){
            this.contenErrorExito.emit("error");
            this.serviceError.setError("Parece que hay un problema inesperado para crear una planta, intentalo otra vez");
        }else if(plantaCreada==true){
          this.contenErrorExito.emit("exito");
          this.serviceError.setError("Planta creada con exito");
        }else{
           this.contenErrorExito.emit("error");
         console.log("nueva planta");
        }
       
      }
      catch(error){
          this.contenErrorExito.emit("error");
      }
      
       
    }else{
      console.log("pais invalido");
    }
     
  }
  editarPlanta(id:number):void{
    if(this.loginForm.valid){
      console.log("editar planta "+id);
    }else{
      console.log("pais invalido"+ id);
    }
      
  }

  paisValido(paises:string[]){
    return (control:AbstractControl):ValidationErrors| null=>{
      const valor= control.value;
      if(paises.includes(valor)){
          return null;
      }else{
        return {paisInvalid: true}
      }
    };
  }
  cerrarCartel(){
      this.serviceCartel.cerrar();
  }
}
