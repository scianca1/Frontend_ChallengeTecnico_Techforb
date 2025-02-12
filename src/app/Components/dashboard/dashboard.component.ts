
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
  

  tarjetasGenerales:TarjetaGeneral[]=[];
  reCargarPlantas:boolean=false;

  constructor(private plantaService:PlantaService){
    this.plantaService.reCargaPlantas.subscribe(s=>{this.reCargarPlantas=s;
                                                    this.cargarLecturas()})
  }
  ngOnInit(): void {
    this.cargarLecturas();
  //  this.plantaService.getAllLecturas().subscribe({
  //     next:(data)=>{
  //       this.tarjetasGenerales=data;
  //     },
  //     error:(error)=>{
  //       console.log("error al obtener tarjetas");
  //     }
  //  })
  }
  cargarLecturas(){
    this.plantaService.getAllLecturas().subscribe({
      next:(data)=>{
        this.tarjetasGenerales=data;
      },
      error:(error)=>{
        console.log("error al obtener tarjetas");
      }
   })
   this.reCargarPlantas=false;
  }

  getIconTarjetaGeneral(text:string){
    let nombre:string=text.replace(" ","");
    return "../assets/imagenes/"+nombre+".png";
    // return "../assets/imagenes/Sensoresdeshabilitados.png";
  }

  
}
