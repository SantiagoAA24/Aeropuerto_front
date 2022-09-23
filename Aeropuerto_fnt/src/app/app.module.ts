import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ApiService} from "./providers/api.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {AeropuertoService} from "./providers/aeropuerto.service";
import {TabMenuModule} from "primeng/tabmenu";
import { PilotoComponent } from './piloto/piloto.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    PilotoComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    DialogModule,
    DropdownModule,
    TabMenuModule
  ],
  providers: [ApiService, AeropuertoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
