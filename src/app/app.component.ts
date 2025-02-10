import { Component } from '@angular/core';
import { CartelService } from './Services/cartel.service';


@Component({
    selector: 'app-root',
    standalone: false,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    
})
export class AppComponent {
  title = 'Challenge_tecnico_Techforb';
  cartel:boolean=false;
  contentCartel:string='';
  idCartel:number|null=null;
  constructor(private serviceCartel:CartelService){
    this.serviceCartel.seleccionado.subscribe(s=>this.cartel=s);
    this.serviceCartel.content.subscribe(c=>this.contentCartel=c);
    this.serviceCartel.id.subscribe(id=>this.idCartel=id);
  }
}
