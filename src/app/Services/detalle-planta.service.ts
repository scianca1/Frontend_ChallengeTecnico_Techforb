import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PlantaDto } from '../Dtos/PlantaDto';
import { SensorDto } from '../Dtos/SensorDto';

@Injectable({
  providedIn: 'root'
})
export class DetallePlantaService {

  private _seleccioonado:boolean=false;
  seleccionado:BehaviorSubject<boolean>= new BehaviorSubject(this._seleccioonado);
  private _sensores:SensorDto[]=[new SensorDto(1,"Temperatura","../assets/imagenes/iconSensor1.png",200,20,3)];
  sensores:BehaviorSubject<SensorDto[]>= new BehaviorSubject(this._sensores);
  private _planta:PlantaDto=new PlantaDto(1,"Brasil","sao Pablo",500,233,33,"../assets/imagenes/BanderaBrasil.png");
  planta:BehaviorSubject<PlantaDto>= new BehaviorSubject(this._planta);
  constructor() { }

  verdetalle(planta:PlantaDto){
    if(this._seleccioonado==false){
        this._seleccioonado=true;
        this._planta=planta;
        //nose si hacer aca el fech de los sensores de la planta 
        this.planta.next(this._planta);
        this.seleccionado.next(this._seleccioonado);
    }else{
      this._seleccioonado=false;
      this.seleccionado.next(this._seleccioonado);
    }
   
  }
}
