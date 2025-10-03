import { Component } from '@angular/core';
import { OperacionesResistencias, ResultadoResistencia, ColorBanda } from './operacionesResistencias';

@Component({
  selector: 'app-resistencias',
  standalone: false,
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {
  banda1Seleccionada = 0;
  banda2Seleccionada = 0;
  banda3Seleccionada = 0;
  banda4Seleccionada = 0;

  resultado?: ResultadoResistencia;

  operaciones = new OperacionesResistencias();

  get bandas(): ColorBanda[] {
    return this.operaciones.getBandas();
  }

  get multiplicadores(): ColorBanda[] {
    return this.operaciones.getBandasMultiplicador();
  }

  get tolerancias(): ColorBanda[] {
    return this.operaciones.getBandasTolerancia();
  }

  constructor() {
    this.calcularResistencia();
  }

  getBandaSeleccionada(numeroBanda: number): number {
    switch (numeroBanda) {
      case 1: return this.banda1Seleccionada;
      case 2: return this.banda2Seleccionada;
      default: return 0;
    }
  }

  onBandaChange(numeroBanda: number, index: number) {
    if (numeroBanda === 1) {
      this.banda1Seleccionada = index;
    } else if (numeroBanda === 2) {
      this.banda2Seleccionada = index;
    }
    this.calcularResistencia();
  }

  onBanda3Change(index: number) {
    this.banda3Seleccionada = index;
    this.calcularResistencia();
  }

  onBanda4Change(index: number) {
    this.banda4Seleccionada = index;
    this.calcularResistencia();
  }

  calcularResistencia() {
    this.resultado = this.operaciones.calcularResistencia(
      this.banda1Seleccionada,
      this.banda2Seleccionada,
      this.banda3Seleccionada,
      this.banda4Seleccionada
    );
  }

  obtenerNombreBanda(index: number): string {
    const nombres = this.operaciones.obtenerNombresColoresSeleccionados(
      this.banda1Seleccionada,
      this.banda2Seleccionada,
      this.banda3Seleccionada,
      this.banda4Seleccionada
    );
    return `Banda ${index + 1}: ${nombres[index]}`;
  }
}