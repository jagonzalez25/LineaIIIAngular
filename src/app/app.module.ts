import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule} from './material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DepartamentoComponent } from './pages/departamento/departamento.component';
import { CiudadComponent } from './pages/departamento/ciudad/ciudad.component';
import { VehiculoComponent } from './pages/vehiculo/vehiculo.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { ErrorInterceptorService } from './_share/error-interceptor.service';
import { NotOkComponent } from './pages/not-ok/not-ok.component';
import { NotAllowedComponent } from './pages/not-allowed/not-allowed.component';
import { environment } from 'src/environments/environment';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
  let tk = sessionStorage.getItem(environment.TOKEN);
  return tk != null ? tk : '';
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    BuscarComponent,
    EditarComponent,
    DepartamentoComponent,
    CiudadComponent,
    VehiculoComponent,
    NotFoundComponent,
    NotOkComponent,
    NotAllowedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['159.223.107.103:8080'],
        disallowedRoutes: ['http://159.223.107.103:8080/movitapp-backend/oauth/token'],
      },
    }),
  ],
  providers: [
    {
      provide:  HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi:    true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
