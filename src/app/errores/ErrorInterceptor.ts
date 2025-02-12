import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { CartelService } from "../Services/cartel.service";
import { ErrorService } from "../Services/error.service";

@Injectable({
    providedIn: 'root'
  })
export class ErrorInterceptor implements HttpInterceptor{
    constructor(private errorService:ErrorService,private cartelservice:CartelService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((error:HttpErrorResponse)=>{
                let errorMensaje='Ups, parece que hay un error desconocido, intenta de nuevo';
                if(error.error instanceof ErrorEvent){
                    errorMensaje="Error del cliente: ${error.error.menssage}";
                }else{
                    if(error.status==401){
                        errorMensaje='Parece que hay un error con las credenciales';
                    }else if(error.status==403){
                        errorMensaje='No tienes acceso a Esta funcion, Debes ser Administrador';
                    }
                    else if(error.status==0){
                        errorMensaje='Tu sesion a Expirado, por fabor ingresa nuevamente';
                        this.cartelservice.set("errorSesion");
                    }
                    else{
                        
                        errorMensaje=typeof error.error === 'string' ? error.error : error.error?.error ||'Parece que hay un error con el servidor por fabor intenta de nuevo o mas tarde';
                    }
                    console.log("Codigo"+error.status+" mensaje= "+error.error.error);
                }
                
                this.errorService.setError(errorMensaje);
                return throwError(()=>new Error (errorMensaje));
            })
        )
    }

}