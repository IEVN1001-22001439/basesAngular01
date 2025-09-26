export interface ColorBanda {
    valor: number;
    color: string;
    nombre: string;
}

export interface ResultadosResistencia {
    valor: number;
    tolerancia: number;
    valorTexto: string;
    colores: string[];
}

export class OperacionesResistencias {
    bandas: ColorBanda[] = [
        { valor: 0, color: '', nombre: 'Negro' },
        { valor: 1, color: '', nombre: 'Café' },
        { valor: 2, color: '', nombre: 'Rojo' },
        { valor: 3, color: '', nombre: 'Naranja' },
        { valor: 4, color: '', nombre: 'Amarillo' },
        { valor: 5, color: '', nombre: 'Verde' },
        { valor: 6, color: '', nombre: 'Azul' },
        { valor: 7, color: '', nombre: 'Morado' },
        { valor: 8, color: '', nombre: 'Gris' },
        { valor: 9, color: '', nombre: 'Blanco' }
    ];

    bandasMultiplicador: ColorBanda[] = [
        { valor: 1, color: '', nombre: 'Negro' },
        { valor: 10, color: '', nombre: 'Café' },
        { valor: 100, color: '', nombre: 'Rojo' },
        { valor: 1000, color: '', nombre: 'Naranja' },
        { valor: 10000, color: '', nombre: 'Amarillo' },
        { valor: 100000, color: '', nombre: 'Verde' },
        { valor: 1000000, color: '', nombre: 'Azul' },
        { valor: 10000000, color: '', nombre: 'Morado' },
        { valor: 100000000, color: '', nombre: 'Gris' },
        { valor: 1000000000, color: '', nombre: 'Blanco' }
    ]
}