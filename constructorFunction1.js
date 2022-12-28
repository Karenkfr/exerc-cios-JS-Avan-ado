//Crie um objeto chamado maquiagem por constructor function, com a propriedade rosto e o método comeceAMaquiar; printe a função

function Maquiagem(rosto) {

    this.rosto = rosto;

    this.comeceAMaquiar = function() {
        console.log(`Você deve começar a maquiagem pela ` + this.rosto);
    }

}

const make = new Maquiagem('base')

make.comeceAMaquiar();