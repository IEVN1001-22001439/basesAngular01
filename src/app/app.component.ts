import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Victor Hugo Amador';

  duplicarNumero(valor:number):number{
    return valor*2;
  }

  pelicula={
    titulo:"Pierrot le fou",
    anio:1965,
    genero:"Drama/Crimen"
  }
}
