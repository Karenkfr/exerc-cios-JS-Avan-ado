// criar um objto abstraído com constructor

class Maquiagem {
    blush = "rosa"
    rímel = false
    sombra;
    base;
    protetorSolar = false

    constructor(sombra,base){
        console.log("A bolsa de maquiagem está aberta");
        this.base = base;
        this.sombra = sombra
    }


    rimel() {
        if(!this.rímel) {
            this.rímel = true;
        }
    }

    proteger() {
        if(!this.protetorSolar) {
            this.protetorSolar = true
        }
    }

    maquiar() {
        if(!this.rímel && !this.protetorSolar)
        this.rimel()
        this.proteger()
    }
}

let maquiagem = new Maquiagem("preta", "natural")

maquiagem.maquiar();
console.log(maquiagem.rímel);
console.log(maquiagem.protetorSolar);
console.log(maquiagem.blush);



