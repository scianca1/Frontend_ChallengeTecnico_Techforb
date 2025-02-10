import { Component, Input, input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-plantas',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-plantas.component.html',
  styleUrl: './form-plantas.component.scss'
})
export class FormPlantasComponent {
  @Input() tipo='';
  loginForm!:FormGroup;
  paises=["ARGENTINA","BRASIL","URUGUAY","PARAGUAY"];

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      nombre:['',[Validators.required]],
      pais:['',[Validators.required]]
    });
  }

  crearPlanta():void{
      console.log("nueva planta");
  }
  editarPlanta():void{
      console.log("editar planta");
  }

}
