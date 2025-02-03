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

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post(this.apiUrl+"auth/login", loginData, { withCredentials: true });
  }
  register(usuario:string,email:string,password:string,repetidaPassword:string): Observable<any>{
    const registerData={usuario,email,password,repetidaPassword};
    return this.http.post(this.apiUrl+"auth/register",registerData,{observe:'response'});
  }

}
