import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Planta } from '../Interfaces/Planta';
import { PlantaDto } from '../Dtos/PlantaDto';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {
  private apiUrl = environment.apiUrl; 

  constructor(private http: HttpClient) { }

  getAllPlantas():Observable<Planta[]>{
    return this.http.get<Planta[]>(this.apiUrl+"Planta",  { withCredentials: true });
  }


}
