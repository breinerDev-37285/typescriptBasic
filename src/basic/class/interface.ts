interface Volador {
    volar(): void;
}

class Pajaro implements Volador {
    volar() {
        console.log("El pájaro está volando.");
    }
}

class Avion implements Volador {
    volar() {
        console.log("El avión está volando.");
    }
}

let objetosVoladores: Volador[] = [new Pajaro(), new Avion()];

for (let objeto of objetosVoladores) {
    objeto.volar();
}
// Output:
// El pájaro está volando.
// El avión está volando.
