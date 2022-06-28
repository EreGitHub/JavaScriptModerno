class Resctangulo {
    #area = 0;
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }

    calcularArea() {
        console.log(this.#area * 2);
    }
}
const rectangulo = new Resctangulo(10, 15);
rectangulo.calcularArea();
console.log(rectangulo);