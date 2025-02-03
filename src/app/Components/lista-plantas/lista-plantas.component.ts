import { Component, Input } from '@angular/core';
import { PlantaDto } from 'src/app/Dtos/PlantaDto';
import { CommonModule } from '@angular/common';
import { DetallePlantaService } from 'src/app/Services/detalle-planta.service';

@Component({
  selector: 'app-lista-plantas',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './lista-plantas.component.html',
  styleUrl: './lista-plantas.component.scss'
})
export class ListaPlantasComponent {
  textBotonVerplanta:string="Ver Planta"
  selectPlantaId:number|null=null;
  Plantas:PlantaDto[]=[new PlantaDto(1,"paraguay","sao Pablo",500,233,33,"../assets/imagenes/BanderaBrasil.png")];
  constructor(private servicioDetalle:DetallePlantaService){

  }

verPlanta(id:number,planta:PlantaDto){
  console.log(id);
  if(this.selectPlantaId==null){
   
    this.textBotonVerplanta="Dejar de ver"
     this.selectPlantaId=id;
  }else{
    this.textBotonVerplanta="Ver Planta"
    this.selectPlantaId=null
  }
  this.servicioDetalle.verdetalle(planta);
}  

}


