import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  crearPlanta(nombre:string, pais:string):Promise<boolean>{
    console.log(nombre,pais);
    return new Promise<boolean>((resolve)=>{
      const httpOptions={
        headers: new HttpHeaders({
          'Content-Type':'application/json'
        }),
        withCredentials: true
      }
      this.http.post<{}>(this.apiUrl+"Planta/nueva",{pais,nombre}, httpOptions).subscribe({
        next: (response) => {

          console.log('PlantaCreada', response);
          resolve(true);
        },
        error: (error) => {
          console.error('Error al iniciar sesión', error);
          resolve(error);
        }
      });
    })
  }

}
