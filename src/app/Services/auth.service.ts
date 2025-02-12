import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private apiUrl = environment.apiUrl; 

  constructor(private http: HttpClient) {}

  login(email: string, password: string):Promise<boolean>{
    return new Promise<boolean>((resolve)=>{
      this.http.post(this.apiUrl+"auth/login",{email, password}, { withCredentials: true }).subscribe({
        next: (response) => {
          location.href="/dashboard"
          console.log('Inicio de sesión exitoso', response);
          resolve(true);
        },
        error: (error) => {
          console.error('Error al iniciar sesión', error);
          resolve(error);
        }
      });
    })
  } 
  CerrarSesion():Promise<boolean>{
    return new Promise<boolean>((resolve)=>{
      this.http.get(this.apiUrl+"auth/logout", { withCredentials: true }).subscribe({
        next: (response) => {
          location.href="/"
          console.log('Sesion Cerrada con exito', response);
          resolve(true);
        },
        error: (error) => {
          console.error('Error al Cerrar sesión', error);
          resolve(error);
        }
      });
    })
  }
  register(usuario:string,email:string,password:string,repetidaPassword:string): Promise<boolean>{
    const registerData={usuario,email,password,repetidaPassword};
    return new Promise<boolean>((resolve)=>{
      return this.http.post(this.apiUrl+"auth/register",registerData,{observe:'response'}).subscribe({
        next: (response) => {
        location.href="/"
        console.log('Registro sesión exitoso', response);
        resolve(true);
      },
      error: (error) => {
        console.error('Error al Registrarce sesión', error.error);
        resolve(error);
      }
      })
      
    })
    
  }

}
