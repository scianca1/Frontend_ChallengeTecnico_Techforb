import { Component, Input } from '@angular/core';
import { Planta } from 'src/app/Interfaces/Planta';
import { ErrorService } from 'src/app/Services/error.service';
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
  constructor(private servicePlanta:PlantaService,private serviceError:ErrorService){}

  setContentErrorExito(content:string){
    this.content=content;
  }
  async eliminarPlanta(id:number){
    
    console.log(id);
    try{
      const response= await this.servicePlanta.eliminarPlanta(id);
      if(!response){
          this.setContentErrorExito("error");
          this.serviceError.setError("Parece que hay un problema inesperado al intentar eliminar una planta, intentalo otra vez");
      }else if(response==true){
        this.setContentErrorExito("exito");
        this.serviceError.setError("Planta eliminada con exito");
      }else{
         this.setContentErrorExito("error");
       
      }
     
    }
    catch(error){
        this.setContentErrorExito("error");
    }
  }
  
}
