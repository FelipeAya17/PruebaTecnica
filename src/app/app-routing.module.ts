import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarUserComponent } from './components/buscar-user/buscar-user.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  {path: '', redirectTo: 'formulario', pathMatch: 'full'},
  {path: 'formulario', component: FormularioComponent},
  {path: 'user/:nombreUsuario', component: BuscarUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
