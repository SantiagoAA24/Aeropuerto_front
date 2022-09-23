import { Component, OnInit } from '@angular/core';
import {AeropuertoService} from "../providers/aeropuerto.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(public aeropuerto: AeropuertoService) { }

  ngOnInit(): void {
    this.aeropuerto.listar_avion()
  }
}
