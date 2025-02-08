
import { Component, OnInit } from '@angular/core';
import { TarjetaGeneral } from 'src/app/Interfaces/TarjetaGeneral';
import { PlantaService } from 'src/app/Services/planta.service';
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
export class DashboardComponent implements OnInit{
  // tarjetasgenerales=[
  //   {
  //    text:"Lecturas OK",
  //    nro: 0,
  //    urlIcon:"../assets/imagenes/tildeIcono.png"
  //   },
  //   {
  //    text:"Alertas medias",
  //    nro: 0,
  //    urlIcon:"../assets/imagenes/admiracionIcono.png"
  //   },
  //   {
  //    text:"Alertas rojas",
  //    nro: 0,
  //    urlIcon:"../assets/imagenes/peligroIcono.png"
  //   },
  //   {
  //    text:"Sensores deshabilitados",
  //    nro: 0,
  //    urlIcon:"../assets/imagenes/cruzIcono.png"
  //   }
  // ]

  tarjetasGenerales:TarjetaGeneral[]=[] ;

  constructor(private plantaService:PlantaService){}
  ngOnInit(): void {
   this.plantaService.getAllLecturas().subscribe({
      next:(data)=>{
        this.tarjetasGenerales=data;
      },
      error:(error)=>{
        console.log("error al obtener tarjetas");
      }
   })
  }

  getIconTarjetaGeneral(text:string){
    console.log("texto= "+text)
    let nombre:string=text.replace(" ","");
    console.log("Resultado= "+nombre)
    return "../assets/imagenes/"+nombre+".png";
    // return "../assets/imagenes/Sensoresdeshabilitados.png";
  }

  
}
