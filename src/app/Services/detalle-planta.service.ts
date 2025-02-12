import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Planta } from '../Interfaces/Planta';
import { Sensor } from '../Interfaces/Sensor';


@Injectable({
  providedIn: 'root'
})
export class DetallePlantaService {

  private apiUrl = environment.apiUrl;

  private _seleccioonado:boolean=false;
  seleccionado:BehaviorSubject<boolean>= new BehaviorSubject(this._seleccioonado);

  private _sensores: Sensor[]=[];
  sensores:BehaviorSubject<Sensor[]>= new BehaviorSubject(this._sensores);
  
  private _planta:Planta|null =null;
 
  planta:BehaviorSubject<Planta|null>= new BehaviorSubject(this._planta);

  constructor(private http: HttpClient) { }

  async verdetalle(planta:Planta){
    try{
          if(this._seleccioonado==false){
            this._seleccioonado=true;
            this._planta=planta;
            this._sensores= await this.getSensores(planta.id);
            this.planta.next(this._planta);
            this.seleccionado.next(this._seleccioonado);
            this.sensores.next(this._sensores);
          }else{
            if(planta===this._planta){
              this._seleccioonado=false;
              this._planta=null;
              this.seleccionado.next(this._seleccioonado);
              }
            else{
              //aca fech tambien 
              this._sensores=await this.getSensores(planta.id);
              this.sensores.next(this._sensores);
              this._planta=planta;
              
            }
              this.planta.next(this._planta);
          }

    }catch(error){
      console.log(error);
    }
    
   
  }
  Deseleccionar(){
    this._seleccioonado=false;
    this._planta=null;
    this.seleccionado.next(this._seleccioonado);
    this.planta.next(this._planta);
  }
  getBanderaUrl(nombrePais:string):string{
    return "../assets/imagenes/Bandera"+nombrePais+".png";
  }
  private async  getSensores(id: number): Promise<Sensor[]>{
    return await firstValueFrom(this.http.get<Sensor[]>(this.apiUrl+"Planta/"+id,{withCredentials:true}));
  }
}


 

