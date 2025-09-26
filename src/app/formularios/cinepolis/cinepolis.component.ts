import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {

  nom: string = "";
  cantComp: number = 0;
  cantBol: number = 0;
  tarjetaCineco: string = "";

  bolPorPrecio: number = 0;
  totalPagar: number = 0;
  totalFinal: string = "";
  bolPorPersona: number = 0;

  precioBol: number = 12;

  procesar(): void {

    if (this.cantComp <= 0 || this.cantBol <= 0) {
      this.totalFinal = "Ingresa cantidades válidas";
      return;
    }

    this.bolPorPersona = this.cantBol / this.cantComp;

    if (this.bolPorPersona > 7) {
      this.totalFinal = "Máximo 7 boletos por comprador";
      return;
    }

    this.bolPorPrecio = this.cantBol * this.precioBol;

    if (this.cantBol > 5) {
      this.totalPagar = this.bolPorPrecio * 0.85;
    } else if (this.cantBol >= 3) {
      this.totalPagar = this.bolPorPrecio * 0.90;
    } else {
      this.totalPagar = this.bolPorPrecio;
    }

    if (this.tarjetaCineco === "si") {
      this.totalPagar *= 0.90;
    }

    this.totalFinal = `$${this.totalPagar}`;
  }
}