//Crie um objeto chamado estudar por constructor function, com a propriedade escrita e o método comeceAEstudar; printe a função

function Estudar(escrita, correcao) {
    this.escrita = escrita
    this.correcao = correcao

    this.comeceAEstudar = function() {
        console.log(`Para começar a estudar você precisa pegar a ` + this.escrita + ` e a ` + this.correcao);
    }
}

const estudante = new Estudar('Caneta', 'borracha')

console.log(estudante.comeceAEstudar());
