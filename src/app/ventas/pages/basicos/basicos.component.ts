import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'gerald';
  nombreUpper: string = 'GERALD';
  nombreCompleto: string = 'GeRAld BUstOS';
  
  fecha: Date = new Date();
}
