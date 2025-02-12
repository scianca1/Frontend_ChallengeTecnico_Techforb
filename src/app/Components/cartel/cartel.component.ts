import { Component, Input } from '@angular/core';
import { Planta } from 'src/app/Interfaces/Planta';
import { PlantaService } from 'src/app/Services/planta.service';
import { CartelErrorComponent } from '../cartel-error/cartel-error.component';
import { FormPlantasComponent } from '../form-plantas/form-plantas.component';

@Component({
  selector: 'app-cartel',
  standalone:true,
  imports: [FormPlantasComponent,CartelErrorComponent],
  templateUrl: './cartel.component.html',
  styleUrl: './cartel.component.scss'
})
export class CartelComponent {
  @Input()content:string='';
  @Input()id:number|null=null;
  @Input()planta:Planta|null=null;
  constructor(private servicePlanta:PlantaService){}

  setContentErrorExito(content:string){
    this.content=content;
  }
  eliminarPlanta(id:number){
    
    console.log(id);
  }
  
}
