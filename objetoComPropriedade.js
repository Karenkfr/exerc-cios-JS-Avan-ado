//Crie um objeto Pessoa, que tem uma propriedade chamada nome; crie um método que exibe o nome do objeto Pessoa

let pessoa = {
    nome: 'Vinicius',

    mostrarNome() {
        console.log(`O nome da pessoa é ` + this.nome);
    }
}


pessoa.mostrarNome();