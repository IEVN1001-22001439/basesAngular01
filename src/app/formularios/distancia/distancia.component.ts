import { Component } from '@angular/core';
import { Distancia } from './distancia';

@Component({
  selector: 'app-distancia',
  standalone: false,
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent {
  x1: number = 0;
  y1: number = 0;
  x2: number = 0;
  y2: number = 0;
  distancia: number = 0;

  calcularDistancia() {
    const calculadora = new Distancia();
    this.distancia = calculadora.calcularDistancia(this.x1, this.y1, this.x2, this.y2);
  }

  limpiar() {
    this.x1 = 0;
    this.y1 = 0;
    this.x2 = 0;
    this.y2 = 0;
    this.distancia = 0;
  }
}