import { Component, Input } from '@angular/core';
import { FormPlantasComponent } from '../form-plantas/form-plantas.component';

@Component({
  selector: 'app-cartel',
  standalone:true,
  imports: [FormPlantasComponent],
  templateUrl: './cartel.component.html',
  styleUrl: './cartel.component.scss'
})
export class CartelComponent {
  @Input()content:string='';
}
