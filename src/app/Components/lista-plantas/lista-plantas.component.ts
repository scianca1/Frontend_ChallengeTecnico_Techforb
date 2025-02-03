import { Component, Input } from '@angular/core';
import { PlantaDto } from 'src/app/Dtos/PlantaDto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-plantas',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './lista-plantas.component.html',
  styleUrl: './lista-plantas.component.scss'
})
export class ListaPlantasComponent {
  selectPlantaId:number|null=null;
  Plantas:PlantaDto[]=[new PlantaDto(1,"Brasil","sao Pablo",500,233,33,"../assets/imagenes/BanderaBrasil.png")];

verPlanta(id:number){

  this.selectPlantaId=id;
  console.log(id);
}  
dejarDeverPlanta(id:number){
  this.selectPlantaId=null
}
}


