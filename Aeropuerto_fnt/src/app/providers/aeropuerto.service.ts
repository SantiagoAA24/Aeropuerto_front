import {Injectable} from "@angular/core";
import {ApiService} from "./api.service";
import {FormBuilder, Validators} from "@angular/forms";
import {MenuItem} from 'primeng/api';
import {Router} from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AeropuertoService {

  aviones: any = [];

  form_avion = this.fb.group({
    id: [''],
    codigo_avion: ['', Validators.required],
    tipo_avion: ['', Validators.required],
    ciudad_base: ['', Validators.required],
    marca: ['', Validators.required],
  })

  ver_formulario_avion: boolean = false;

  items: MenuItem[] = [
    {label: 'Home', icon: 'fa-solid fa-home',  command: (event) => {
        this.router.navigate(['/home'])
      }},
    {label: 'Aviones', icon: 'fa-solid fa-plane', command: (event) => {
      this.router.navigate(['/inicio'])
      }},
    {label: 'Pilotos', icon: 'fa-solid fa-user',  command: (event) => {
        this.router.navigate(['/piloto'])
      }},
  ];

  constructor(private api: ApiService, private fb: FormBuilder, private router: Router) {}

  listar_avion() {
    this.api.get('avion')
      .subscribe(data=>{
        if (data != undefined) {
          this.aviones = data
        }
      })
  }

  llenar_form_avion(avion: any) {
    this.form_avion.patchValue({
      id: avion.id,
      codigo_avion: avion.codigo_avion,
      tipo_avion: avion.tipo_avion,
      ciudad_base: avion.ciudad_base,
      marca: avion.marca
    })
  }

  guardar_actualizar_avion() {
    if (this.form_avion.value['id']) {
      this.actualizar_avion()
    } else {
      this.guardar_avion()
    }
  }

  guardar_avion() {
    this.api.add('avion', this.form_avion.value)
      .subscribe(data => {
        if (data != undefined) {
          this.ver_formulario_avion = false
          this.form_avion.reset()
          this.listar_avion()
        }
      })
  }

  actualizar_avion() {
    this.api.update('avion', this.form_avion.value['id'], this.form_avion.value)
      .subscribe(data => {
        if (data != undefined) {
          this.ver_formulario_avion = false
          this.form_avion.reset()
          this.listar_avion()
        }
      })
  }
}
