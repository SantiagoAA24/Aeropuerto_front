import { Component } from '@angular/core';
import {AeropuertoService} from "./providers/aeropuerto.service";
import {ApiService} from "./providers/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(public aeropuerto: AeropuertoService, public api: ApiService) {
  }

  // title = 'Aeropuerto_fnt';
  /*resultado:number = 0;

  sumar (num1:string, num2:string) {
    if (parseInt(num1) && parseInt(num2)) {
      this.resultado = parseInt(num1) + parseInt(num2);
    } else {
      alert("Por favor digite dos numeros diferentes a 0.")
    }
  }

  restar (num1:string, num2:string) {
    if (parseInt(num1) && parseInt(num2)) {
      this.resultado = parseInt(num1) - parseInt(num2);
    } else {
      alert("Por favor digite dos numeros diferentes a 0.")
    }
  }

  multiplicar (num1:string, num2:string) {
    if (parseInt(num1) && parseInt(num2)) {
      this.resultado = parseInt(num1) * parseInt(num2);
    } else {
      alert("Por favor digite dos numeros diferentes a 0.")
    }
  }

  dividir (num1:string, num2:string) {
    if (parseInt(num1) && parseInt(num2)) {
      this.resultado = parseInt(num1) / parseInt(num2);
    } else {
      alert("Por favor digite dos numeros diferentes a 0.")
    }
  }*/

  /*lista = [
    { 'nombre':'Pablo', 'edad':'24' },
    { 'nombre':'Sofia', 'edad':'16' },
    { 'nombre':'Santiago', 'edad':'20' },
    { 'nombre':'Leidy', 'edad':'27' },
    { 'nombre':'Diana', 'edad':'35' },
  ]*/

  /*adicionar_persona (nombre:string, fn:string) {
    const hoy = new Date().getFullYear()
    let edad = hoy - new Date(fn).getFullYear()
    this.lista.push({ 'nombre': nombre, 'edad': edad.toString() })
  }

  borrar_persona (persona:any) {
    this.lista.splice(this.lista.indexOf(persona), 1)
  }*/

  /*lista = [
    {
      'marca': 'Chevrolet',
      'modelos': [
        { 'linea': 'Captiva', 'version': 'Lts' },
        { 'linea': 'Spark GT', 'version': 'Lts' },
        { 'linea': 'Spark Go', 'version': 'Lts'},
      ],
      'disponibilidad': [
        { 'ciudad': 'Medellin' },
        { 'ciudad': 'Pasto' },
        { 'ciudad': 'Bogota' },
        { 'ciudad': 'Cali' },
      ],
    },
    {
      'marca': 'Volkswagen',
      'modelos': [
        { 'linea': 'Gol', 'version': 'Trendline' },
        { 'linea': 'Jetta', 'version': 'Confortline' },
        { 'linea': 'Fox', 'version': 'Trendline' },
      ],
      'disponibilidad': [
        { 'ciudad': 'Pereira' },
        { 'ciudad': 'Manizales' },
        { 'ciudad': 'Bogota' },
        { 'ciudad': 'Cali' },
      ],
    },
    {
      'marca': 'Renault',
      'modelos': [
        { 'linea': 'Duster', 'version': 'Dynamique' },
        { 'linea': 'Sandero', 'version': 'Dynamic' },
        { 'linea': 'Logan', 'version': 'Authentique' },
      ],
      'disponibilidad': [
        { 'ciudad': 'Medellin' },
        { 'ciudad': 'Pasto' },
        { 'ciudad': 'Bogota' },
        { 'ciudad': 'Cali' },
      ],
    },
    {
      'marca': 'Mazda',
      'modelos': [
        { 'linea': 'Mazda 2', 'version': 'Dynamique' },
        { 'linea': 'Mazda 3', 'version': 'Dynamic' },
        { 'linea': 'CX5', 'version': 'Authentique' },
      ],
      'disponibilidad': [
        { 'ciudad': 'Pereira' },
        { 'ciudad': 'Manizales' },
        { 'ciudad': 'Bogota' },
        { 'ciudad': 'Cali' },
      ],
    },
  ]

  adicionar_marca ( marca: string) {
    this.lista.push( { 'marca': marca, 'modelos': [], 'disponibilidad': [] } )
  }

  adicionar_modelo ( marca: string, linea: string, version: string ) {
    let item = this.lista.filter( item => item.marca == marca )[0]
    item !== null ? item.modelos.push( { 'linea': linea, 'version': version } ) : alert('No se encontro el item')
  }

  adicionar_ciudad ( marca: string, ciudad: string ) {
    let item = this.lista.filter( item => item.marca == marca )[0]
    item.disponibilidad.push( { 'ciudad': ciudad } )
  }

  borrar_item ( item: any ) {
    this.lista.splice( this.lista.indexOf( item ), 1 )
  }

  borrar_modelo ( item: any, modelo: any ) {
    item.modelos.splice( item.modelos.indexOf(modelo), 1 )
  }

  borrar_ciudad ( item: any, ciudad: any ) {
    item.disponibilidad.splice( item.modelos.indexOf(ciudad), 1 )
  }

  cambiar_marca ( item: any, nueva_marca: string ) {
    item.marca = nueva_marca
  }

  cambiar_modelo ( modelo: any, nueva_linea: string, nueva_version: string ) {
    modelo.linea = nueva_linea
    modelo.version = nueva_version
  }

  cambiar_ciudad ( disp: any, nueva_ciudad: string ) {
    disp.ciudad = nueva_ciudad
  }*/

}
