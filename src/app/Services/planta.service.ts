import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Planta } from '../Interfaces/Planta';
import { TarjetaGeneral } from '../Interfaces/TarjetaGeneral';


@Injectable({
  providedIn: 'root'
})
export class PlantaService {
 
  

  private apiUrl = environment.apiUrl; 

  private _reCargaPlantas:boolean=false;
  reCargaPlantas:BehaviorSubject<boolean>= new BehaviorSubject(this._reCargaPlantas);


  constructor(private http: HttpClient) { }

  getAllPlantas():Observable<Planta[]>{
    return this.http.get<Planta[]>(this.apiUrl+"Planta",  { withCredentials: true });
  }
  getAllLecturas():Observable<TarjetaGeneral[]>{
    return this.http.get<TarjetaGeneral[]>(this.apiUrl+"Planta/Lecturas",{withCredentials:true});
  }
  crearPlanta(nombre:string, pais:string):Promise<boolean>{
    
    return new Promise<boolean>((resolve)=>{
      const httpOptions={
        headers: new HttpHeaders({
          'Content-Type':'application/json'
        }),
        withCredentials: true
      }
      this.http.post<{}>(this.apiUrl+"Planta/nueva",{pais,nombre}, httpOptions).subscribe({
        next: (response) => {
          this.recargarPlantas();
          console.log('PlantaCreada', response);
          resolve(true);
        },
        error: (error) => {
          console.error('Error al Editar Planta', error);
          resolve(error);
        }
      });
    })
  }
 EditarPlanta(nombre:string, pais:string,id:number):Promise<boolean>{
  return new Promise<boolean>((resolve)=>{
    const httpOptions={
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      }),
      withCredentials: true
    }
    this.http.put<{}>(this.apiUrl+"Planta/editar/"+id,{pais,nombre}, httpOptions).subscribe({
      next: (response) => {
        this.recargarPlantas();
        console.log('PlantaEditada', response);
        resolve(true);
      },
      error: (error) => {
        console.error('Error al editar Planta', error);
        resolve(error);
      }
    });
  }) 
  }
  recargarPlantas(){
      this._reCargaPlantas=true;
      this.reCargaPlantas.next(this._reCargaPlantas);
  }
}
