import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjetas-generales',
  standalone:true,
  imports: [],
  templateUrl: './tarjetas-generales.component.html',
  styleUrl: './tarjetas-generales.component.scss'
})
export class TarjetasGeneralesComponent {
  @Input() text='';
  @Input() cantidad='';
  @Input() urlIcon='';
}
