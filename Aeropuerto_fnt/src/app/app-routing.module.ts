import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./inicio/inicio.component";
import {LoginComponent} from "./login/login.component";
import {PilotoComponent} from "./piloto/piloto.component";
import {MainComponent} from "./main/main.component";

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'piloto', component: PilotoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: MainComponent },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
