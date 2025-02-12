import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallePlantaService } from 'src/app/Services/detalle-planta.service';
import { Planta } from 'src/app/Interfaces/Planta';
import { PlantaHooks } from 'src/app/Hooks/PlantaHooks';
import { CartelService } from 'src/app/Services/cartel.service';
import { CookieService } from 'ngx-cookie-service';
import { ErrorService } from 'src/app/Services/error.service';
import { PlantaService } from 'src/app/Services/planta.service';

@Component({
  selector: 'app-lista-plantas',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './lista-plantas.component.html',
  styleUrl: './lista-plantas.component.scss'
})
export class ListaPlantasComponent implements OnInit{
  textBotonVerplanta:string="Ver Planta"
  selectPlantaId:number|null=null;
  plantas:Planta[]=[];
  reCargarPlantas:boolean=false;
  constructor(private servicioDetalle:DetallePlantaService,private plantaHooks:PlantaHooks,private servicioCartel:CartelService,private cookieService:CookieService,private serviceError:ErrorService,private servicePlanta:PlantaService){
      this.servicioCartel.seleccionado.subscribe(s=>{if(!s){this.selectPlantaId=null;
                                                            this.servicioDetalle.Deseleccionar();}});
      
      this.servicePlanta.reCargaPlantas.subscribe(r=>{this.reCargarPlantas=r;
                                                      this.cargarPlantas();})
  }
  async ngOnInit(): Promise<void> {
    this.cargarPlantas();
  }

async cargarPlantas(){
  const response:Planta[]|string= await this.plantaHooks.getAllPlantas();
    if(typeof response!="string"){
        this.plantas=response;
    }else{
       
    } 
    this.reCargarPlantas=false;
}


verPlanta(id:number,planta:Planta){
  console.log(id);
  if(this.selectPlantaId==id){
    this.selectPlantaId=null;
  }else{
    this.selectPlantaId=id;
  }
  this.servicioDetalle.verdetalle(planta);
}  

getBanderaUrl(nombrePais:string):string{
  return this.servicioDetalle.getBanderaUrl(nombrePais);
}

abrirCartel(content:string,id:number|null,planta:Planta|null):void{

  if(this.cookieService.get('RolUser')=="ADMIN"){
    if(id!=null&& planta!=null){
      this.servicioCartel.set("editarEliminar");
      this.servicioCartel.setId(id);
        this.servicioCartel.setPlanta(planta);
        this.verPlanta(id,planta);
    }else{
      this.servicioCartel.set(content);
    }
    
      // if(id!=null&& planta!=null){
      //   this.servicioCartel.setId(id);
      //   this.servicioCartel.setPlanta(planta);
      //   this.verPlanta(id,planta);
      // }
  }else{
    this.servicioCartel.set("error");
    this.serviceError.setError("ups, Debes tener Permisos de Administrador para usar esta funcion");
  }
}


}


