import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './Components/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:"",
    component: InicioSesionComponent,
  },
  {
    path:"registro",
    component: RegistroComponent
  },
  {
    path:"dashboard",
    component: DashboardComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
