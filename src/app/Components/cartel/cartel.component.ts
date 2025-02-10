import { Component, Input } from '@angular/core';
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
  

  setContentErrorExito(content:string){
    this.content=content;
  }
}
