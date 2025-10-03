export interface ColorBanda {
    valor: number;
    color: string;
    nombre: string;
}

export interface ResultadoResistencia {
    valor: number;
    tolerancia: number;
    valorTexto: string;
    colores: string[];
    valorMinimo: number;
    valorMaximo: number;
}

export class OperacionesResistencias {
    bandas: ColorBanda[] = [
        { valor: 0, color: '#000000', nombre: 'Negro' },
        { valor: 1, color: '#8B4513', nombre: 'Café' },
        { valor: 2, color: '#FF0000', nombre: 'Rojo' },
        { valor: 3, color: '#FFA500', nombre: 'Naranja' },
        { valor: 4, color: '#FFFF00', nombre: 'Amarillo' },
        { valor: 5, color: '#008000', nombre: 'Verde' },
        { valor: 6, color: '#0000FF', nombre: 'Azul' },
        { valor: 7, color: '#800080', nombre: 'Morado' },
        { valor: 8, color: '#808080', nombre: 'Gris' },
        { valor: 9, color: '#FFFFFF', nombre: 'Blanco' }
    ];

    bandasMultiplicador: ColorBanda[] = [
        { valor: 1, color: '#000000', nombre: 'Negro' },
        { valor: 10, color: '#8B4513', nombre: 'Café' },
        { valor: 100, color: '#FF0000', nombre: 'Rojo' },
        { valor: 1000, color: '#FFA500', nombre: 'Naranja' },
        { valor: 10000, color: '#FFFF00', nombre: 'Amarillo' },
        { valor: 100000, color: '#008000', nombre: 'Verde' },
        { valor: 1000000, color: '#0000FF', nombre: 'Azul' },
        { valor: 10000000, color: '#800080', nombre: 'Morado' },
        { valor: 100000000, color: '#808080', nombre: 'Gris' },
        { valor: 1000000000, color: '#FFFFFF', nombre: 'Blanco' }
    ];

    bandasTolerancia: ColorBanda[] = [
        { valor: 5, color: '#FFD700', nombre: 'Dorado' },
        { valor: 10, color: '#C0C0C0', nombre: 'Plateado' }
    ];

    getBandas(): ColorBanda[] {
        return this.bandas;
    }

    getBandasMultiplicador(): ColorBanda[] {
        return this.bandasMultiplicador;
    }

    getBandasTolerancia(): ColorBanda[] {
        return this.bandasTolerancia;
    }

    calcularResistencia(
        banda1: number,
        banda2: number,
        banda3: number,
        banda4: number = 0
    ): ResultadoResistencia {

        const valorBanda1 = this.bandas[banda1].valor;
        const valorBanda2 = this.bandas[banda2].valor;
        const multiplicador = this.bandasMultiplicador[banda3].valor;
        const tolerancia = this.bandasTolerancia[banda4].valor;

        const valorBase = valorBanda1 * 10 + valorBanda2;
        const valorNumerico = valorBase * multiplicador;

        const toleranciaDecimal = tolerancia / 100;
        const variacion = valorNumerico * toleranciaDecimal;
        const valorMinimo = valorNumerico - variacion;
        const valorMaximo = valorNumerico + variacion;

        const colores = [
            this.bandas[banda1].color,
            this.bandas[banda2].color,
            this.bandasMultiplicador[banda3].color,
            this.bandasTolerancia[banda4].color
        ];

        const valorTexto = valorNumerico.toString();

        return {
            valor: valorNumerico,
            tolerancia: tolerancia,
            valorTexto: valorTexto,
            colores: colores,
            valorMinimo: valorMinimo,
            valorMaximo: valorMaximo
        };
    }

    obtenerNombresColoresSeleccionados(
        banda1: number,
        banda2: number,
        banda3: number,
        banda4: number
    ): string[] {
        return [
            this.bandas[banda1].nombre,
            this.bandas[banda2].nombre,
            this.bandasMultiplicador[banda3].nombre,
            this.bandasTolerancia[banda4].nombre
        ];
    }
}