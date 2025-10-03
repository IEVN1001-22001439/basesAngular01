export class Distancia {
    calcularDistancia(x1: number, y1: number, x2: number, y2: number): number {
        const diferenciaX = x2 - x1;
        const diferenciaY = y2 - y1;
        const distancia = Math.sqrt(diferenciaX * diferenciaX + diferenciaY * diferenciaY);
        return distancia;
    }
} 