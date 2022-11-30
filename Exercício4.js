
// polimorfismo 

class Carro {
    velocidade = 0 
    ligado = true
    nivelCombustivel = 100
    qtdPortas = 4
    potencia = 100

    ligar() {
        if(this.ligado) {
            console.log('o carro está ligado');
        }else {
            this.ligado = true
        }
    }

    andar() {
        if(!this.ligado) {
            this.ligado = true
        }
        this.velocidade = 40
    }
}

class CarroQuebrado extends Carro {
    andar() {
        console.log("carro quebrado");
    }
}

class CarroDeCorrida extends Carro {
    andar() {
        if(!this.ligado) {
            this.ligado = true
        }
        this.velocidade = 120
    }
}

class CarroComArCondicionado extends Carro {
    
    temperatura = 25
    ligarAr() {
        this.temperatura = 23
    }

    desligarAr() {
        this.temperatura = 30
    }
}

let carroRuim = new CarroQuebrado()
let carroF1 = new CarroDeCorrida()
let carroAr = new CarroComArCondicionado()

carroRuim.andar();
carroF1.andar();
carroAr.andar();

console.log(carroRuim.velocidade);
console.log(carroF1.velocidade);
console.log(carroAr.velocidade);

