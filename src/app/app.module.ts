import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioSesionComponent } from './Components/inicio-sesion/inicio-sesion.component';
import { ErrorInterceptor } from './errores/ErrorInterceptor';
import {CookieService} from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InicioSesionComponent,
    FormsModule,
    ReactiveFormsModule,
    

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi:true
    },{
      provide: CookieService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
