import { Injectable } from "@angular/core";
import { catchError, map, Observable, of, throwError } from "rxjs";
import { Planta } from "../Interfaces/Planta";
import { PlantaService } from "../Services/planta.service";

@Injectable({
    providedIn: 'root'
  })
  export class PlantaHooks {

    plantas:Planta[]=[];
    constructor(private service: PlantaService){

    }
    async getAllPlantas():Promise<Planta[]|string>{
        let error:string="";

        return new Promise<Planta[]|string>((resolve,rejects)=>{
          this.service.getAllPlantas().subscribe({
            next: (response) => {
              // console.log('plantas exitoso', response);
              this.plantas=response;
              resolve(this.plantas);
            },
            error: (error) => {
              console.error('Error Plantas', error);
              resolve(error.error.response);
            }
          });
        })
        // this.service.getAllPlantas().subscribe({
        //     next: (response) => {
        //       console.log('plantas exitoso', response);
        //       this.plantas=response;
        //     },
        //     error: (error) => {
        //       console.log("error");
        //       error= error.error.response;
        //     }
        //   });
        //   if(error!=""){
        //     return error;
        //   }
      //   console.log(this.plantas);
      //  return this.plantas;
    }
  }