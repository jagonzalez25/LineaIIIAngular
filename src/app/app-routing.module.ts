import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { DepartamentoComponent } from './pages/departamento/departamento.component';
import { CiudadComponent } from './pages/departamento/ciudad/ciudad.component';
import { VehiculoComponent } from './pages/vehiculo/vehiculo.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NotOkComponent } from './pages/not-ok/not-ok.component';
import { NotAllowedComponent } from './pages/not-allowed/not-allowed.component';
import { LoginComponent } from './pages/login/login.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { GuardianService } from './_share/guardian.service'


const routes: Routes = [
  {path: '', component: BuscarComponent},
  {path: 'buscar', component: BuscarComponent},
  {path: 'ingresar', component: RegistroComponent, canActivate: [GuardianService]},
  {path: 'editar', component: EditarComponent, canActivate: [GuardianService]},
  {path: 'departamento', component: DepartamentoComponent, children :[
       {path:  'ciudad/:idDep', component: CiudadComponent, canActivate: [GuardianService]}
    ], canActivate: [GuardianService]
  },
  {path: 'login', component: LoginComponent},
  {path: 'vehiculo', component: VehiculoComponent, canActivate: [GuardianService]},
  {path: 'usuario', component: UsuarioComponent, canActivate: [GuardianService]},
  {path: 'error', component: NotOkComponent},
  {path: 'nopermiso', component: NotAllowedComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
