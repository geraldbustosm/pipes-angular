import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  nombre: string = 'Gerald';
  genero: string = 'masculino';

  // i18nSelect
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };

  // i18nPlural
  clientes: string[] = ['Maria', 'Leo', 'Gerald'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando',
  }

  cambiarPersona(): void {

    if (this.nombre === 'Gerald') {
      this.nombre = 'Maria';
      this.genero = 'femenino';
    }
    else {
      this.nombre = 'Gerald';
      this.genero = 'masculino';
    }

  }

  borrarCliente(): void {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Gerald',
    edad: 25,
    direccion: 'Coquimbo'
  }

  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ];

  // Async Pipe
  miObservable = interval(2000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });

}
