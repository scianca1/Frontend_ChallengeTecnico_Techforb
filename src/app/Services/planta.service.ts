import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Planta } from '../Interfaces/Planta';
import { TarjetaGeneral } from '../Interfaces/TarjetaGeneral';


@Injectable({
  providedIn: 'root'
})
export class PlantaService {

  private apiUrl = environment.apiUrl; 



  constructor(private http: HttpClient) { }

  getAllPlantas():Observable<Planta[]>{
    return this.http.get<Planta[]>(this.apiUrl+"Planta",  { withCredentials: true });
  }
  getAllLecturas():Observable<TarjetaGeneral[]>{
    return this.http.get<TarjetaGeneral[]>(this.apiUrl+"Planta/Lecturas",{withCredentials:true});
  
  }

}
