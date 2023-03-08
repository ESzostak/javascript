const pessoa = {
    nome: 'Eduardo',
    sobrenome: 'Szostak',
    idade: 25,
    endereco: {
        rua: 'Luiz Cláudio Guras Junior',
        numero: 69,
    }
}

//atribuiçao via desestruturaçao

const { nome, sobrenome} = pessoa;
console.log( nome, sobrenome);

//------------------------------------------------------------------------------//
console.log('--------------------------------------------');
//------------------------------------------------------------------------------//

//especificar a chave e mudar o nome da variavel 

const pessoa2 = {
    nome: 'Eduardo',
    sobrenome: 'Szostak',
    idade: 25,
    endereco: {
        rua: 'Luiz Cláudio Guras Junior',
        numero: 69,
    }
}

//atribuiçao via desestruturaçao

const { nome: teste = '', sobrenome2} = pessoa2;
console.log( teste, sobrenome);

//------------------------------------------------------------------------------//
console.log('--------------------------------------------');
//------------------------------------------------------------------------------//

//extrair o valor de um objeto dentro de outro

const pessoa3 = {
    nome: 'Eduardo',
    sobrenome: 'Szostak',
    idade: 25,
    endereco: {
        rua: 'Luiz Cláudio Guras Junior',
        numero: 69,
    }
}

//atribuiçao via desestruturaçao

const { endereco: {rua, numero}, endereco} = pessoa3;
console.log( rua, numero, endereco);

//------------------------------------------------------------------------------//
console.log('--------------------------------------------');
//------------------------------------------------------------------------------//

//utilizando o operador ...rest

const pessoa4 = {
    nome1: 'Eduardo',
    sobrenome: 'Szostak',
    idade: 25,
    endereco: {
        rua: 'Luiz Cláudio Guras Junior',
        numero: 69,
    }
}

//atribuiçao via desestruturaçao

const { nome1, ...resto} = pessoa4;
console.log(nome1, resto);
