//classes com métodos

class pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar (){
        console.log(`${this.nome} está falando!`);
    }
    comer (){
        console.log(`${this.nome} está comendo!`);
    }
}

const p1 = new pessoa('Luiz', 'Miranda');
const p2 = new pessoa('José', 'Miranda');

// função construtora

function pessoa2 (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

pessoa2.prototype.falar = function (){
    console.log(`${this.nome} está falando!`);
}

const p3 = new pessoa2('Maria', 'Miranda');
const p4 = new pessoa2('Eduardo', 'Miranda');
