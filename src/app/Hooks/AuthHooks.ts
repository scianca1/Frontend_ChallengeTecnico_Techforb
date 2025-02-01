import { Injectable } from "@angular/core";
import { catchError, map, Observable, of, throwError } from "rxjs";
import { AuthService } from "../Services/auth.service";

@Injectable({
    providedIn: 'root'
  })
  export class AuthHooks {
        constructor(private service: AuthService){}

        login (email:string, contracenia:string){
            this.service.login(email, contracenia).subscribe({
                next: (response) => {
                    location.href="/dashboard"
                  console.log('Inicio de sesión exitoso', response);
                  // Aquí puedes redirigir al usuario o almacenar información
                },
                error: (error) => {
                  console.error('Error al iniciar sesión', error);
                }
              });
        }

        // register(user:string,email:string,contracenia:string,repetirContracenia:string){
        //     this.service.register(user,email,contracenia,repetirContracenia).pipe(
        //         catchError(error=>{
        //             if(error.status===201){
        //                 return of(error);
        //             }else{
        //                 return throwError(()=>error);
        //             }
        //         })
        //     ).subscribe(
        //         {
        //             next: (response) => {
        //                 if(response.status===201||response.status===200){
        //                      location.href="/"
        //                      console.log('Registro exitoso', response);
                           
        //                 }
        //             },
        //             error: (error) => {
        //               console.error('Error al registrarse', error);
                      
        //             }
        //           }
        //     )
        // }
        register(user:string,email:string,contracenia:string,repetirContracenia:string):Observable<{estatus:number,text:any}>{
            return this.service.register(user,email,contracenia,repetirContracenia).pipe(
                map(response=>{
                        location.href="/"
                        return{estatus:response.status,text:response.response.response}
                    }),
                catchError(error=>{
                    return throwError(()=>({estatus: error.status,text:error.error.response}))
                })
            );
        }

  }