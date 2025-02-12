import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {

  constructor(private serviceAuth:AuthService){}

 async cerrarSesion(){
    console.log("cerrar sesion");
    try{
      const sesion= await this.serviceAuth.CerrarSesion();
      if(!sesion){
          console.log("Error al cerrar Sesion");
      }else if(sesion==true){
        console.log("Exito al cerrar Sesion");
      }else{
        console.log("Error al cerrar Sesion");
      }
     
    }
    catch(error){
      console.log("error inesperado al cerrar sesion");
    }
  }

}
