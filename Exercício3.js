// utilização do extends

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


class MaquiagemDiaADia extends Maquiagem {
    
    maquiar() {
        console.log(`utilização de maquiagem para o dia a dia`);
    }
}

let makeTrabalho = new MaquiagemDiaADia;

 makeTrabalho.maquiar()