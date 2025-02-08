import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlantaDto } from '../Dtos/PlantaDto';
import { SensorDto } from '../Dtos/SensorDto';
import { Planta } from '../Interfaces/Planta';
import { Sensor } from '../Interfaces/Sensor';


@Injectable({
  providedIn: 'root'
})
export class DetallePlantaService {

  private apiUrl = environment.apiUrl;

  private _seleccioonado:boolean=false;
  seleccionado:BehaviorSubject<boolean>= new BehaviorSubject(this._seleccioonado);

  private _sensores:SensorDto[]=[new SensorDto(1,"Temperatura","../assets/imagenes/iconSensor1.png",200,20,3)];
  sensores:BehaviorSubject<SensorDto[]>= new BehaviorSubject(this._sensores);

  private _sensores1: Sensor[]=[];
  sensores1:BehaviorSubject<Sensor[]>= new BehaviorSubject(this._sensores1);
  // private _planta:PlantaDto=new PlantaDto(1,"Brasil","sao Pablo",500,233,33,"../assets/imagenes/BanderaBrasil.png");
  private _planta:Planta|null =null;
  // planta:BehaviorSubject<PlantaDto>= new BehaviorSubject(this._planta);
  planta:BehaviorSubject<Planta|null>= new BehaviorSubject(this._planta);

  constructor(private http: HttpClient) { }

  async verdetalle(planta:Planta){
    try{
          if(this._seleccioonado==false){
            this._seleccioonado=true;
            this._planta=planta;
            //nose si hacer aca el fech de los sensores de la planta 
            this._sensores1= await this.getSensores(planta.id);
            this.planta.next(this._planta);
            this.seleccionado.next(this._seleccioonado);
            this.sensores1.next(this._sensores1);
          }else{
            if(planta===this._planta){
              this._seleccioonado=false;
              this._planta=null;
              this.seleccionado.next(this._seleccioonado);
              }
            else{
              //aca fech tambien 
              this._sensores1=await this.getSensores(planta.id);
              this.sensores1.next(this._sensores1);
              this._planta=planta;
              
            }
              this.planta.next(this._planta);
          }

    }catch(error){
      console.log(error);
    }
    
   
  }
  getBanderaUrl(nombrePais:string):string{
    return "../assets/imagenes/Bandera"+nombrePais+".png";
  }
  private async  getSensores(id: number): Promise<Sensor[]>{
    return await firstValueFrom(this.http.get<Sensor[]>(this.apiUrl+"Planta/"+id,{withCredentials:true}));
  }
}


 

