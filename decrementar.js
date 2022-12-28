//Em um objeto heroi em que a propriedade disparos, com uma quantidade máxima de estrela;
//Em cada disparo, subtrair uma estrela
//O Heroi não pode jogar mais disparos caso as estrelas tenham acabado 


const heroi = {
    disparos: 5,

    atirar() {
        this.disparos -= 1;
    }
}

heroi.atirar();
console.log(heroi.disparos);

if (heroi.disparos == 0) {
    console.log("Você não possui mais disparos");
} else {
    console.log(`Você tem mais ` + heroi.disparos + ` disparos para realizar`);
}


heroi.atirar();
console.log(heroi.disparos);

if (heroi.disparos == 0) {
    console.log("Você não possui mais disparos");
} else {
    console.log(`Você tem mais ` + heroi.disparos + ` disparos para realizar`);
}


heroi.atirar();
console.log(heroi.disparos);

if (heroi.disparos == 0) {
    console.log("Você não possui mais disparos");
} else {
    console.log(`Você tem mais ` + heroi.disparos + ` disparos para realizar`);
}


heroi.atirar();
console.log(heroi.disparos);

if (heroi.disparos == 0) {
    console.log("Você não possui mais disparos");
} else {
    console.log(`Você tem mais ` + heroi.disparos + ` disparos para realizar`);
}


heroi.atirar();
console.log(heroi.disparos);

if (heroi.disparos == 0) {
    console.log("Você não possui mais disparos");
} else {
    console.log(`Você tem mais ` + heroi.disparos + ` disparos para realizar`);
}


