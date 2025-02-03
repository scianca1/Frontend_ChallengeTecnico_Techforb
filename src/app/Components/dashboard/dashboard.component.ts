import { Component } from '@angular/core';
import { PlantaDto } from 'src/app/Dtos/PlantaDto';
import { DetallePlantaComponent } from '../detalle-planta/detalle-planta.component';
import { ListaPlantasComponent } from '../lista-plantas/lista-plantas.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { TarjetasGeneralesComponent } from '../tarjetas-generales/tarjetas-generales.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SideNavComponent,NavBarComponent,TarjetasGeneralesComponent,ListaPlantasComponent,DetallePlantaComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  tarjetasgenerales=[
    {
     text:"Lecturas OK",
     nro: 0,
     urlIcon:"../assets/imagenes/tildeIcono.png"
    },
    {
     text:"Alertas medias",
     nro: 0,
     urlIcon:"../assets/imagenes/admiracionIcono.png"
    },
    {
     text:"Alertas rojas",
     nro: 0,
     urlIcon:"../assets/imagenes/peligroIcono.png"
    },
    {
     text:"Sensores deshabilitados",
     nro: 0,
     urlIcon:"../assets/imagenes/cruzIcono.png"
    }
  ]
  
}
