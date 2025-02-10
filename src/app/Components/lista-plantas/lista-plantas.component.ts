import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallePlantaService } from 'src/app/Services/detalle-planta.service';
import { Planta } from 'src/app/Interfaces/Planta';
import { PlantaHooks } from 'src/app/Hooks/PlantaHooks';
import { async } from 'rxjs';
import { CartelService } from 'src/app/Services/cartel.service';

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
  constructor(private servicioDetalle:DetallePlantaService,private plantaHooks:PlantaHooks,private servicioCartel:CartelService){

  }
  async ngOnInit(): Promise<void> {
    const response:Planta[]|string= await this.plantaHooks.getAllPlantas();
    if(typeof response!="string"){
        this.plantas=response;
    }else{
        //to do: Manejar errores posibles 
    }  
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

abrirCartel(content:string):void{
    this.servicioCartel.set(content);
}

}


