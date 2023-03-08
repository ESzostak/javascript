// Declaração de função (Function hoisting) -> o javascript "move as funções para cima do código na hora da execuçåo).

falaOi();

function falaOi() {
    console.log('Oi');
}

//first-class objects (Obhetos de primeira classe).
// Function expression

const souUmDado = function() {
    console.log('Sou um dado.');
};

souUmDado();

//Arrow function

const funcaoArrow = () => {
    console.log('Sou uma arrow function.');
}

funcaoArrow();

// Dentro de um objeto

const objeto = {
    falar(){
        console.log('Estou falando...');
    }
}

objeto.falar();