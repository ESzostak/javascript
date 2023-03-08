//Filter sempre vai retornar um array, com a mesma quantidade de elementos ou menos.
//Retornar os numeros maiores do que 10

const numeros = [5, 50, 80, 1, 2, 3, 5, 6, 8, 11, 15, 22, 27];

function callbackfilter (valor){
    // if (valor > 10) {
    //     return true;
    // } else {
    //     return false;
    // }
    return valor > 10;
}

const numerosFiltrados = numeros.filter(callbackfilter);

console.log(numerosFiltrados)

//------------------------------------------------------------------------------//
console.log('--------------------------------------------');
//------------------------------------------------------------------------------//

const numeros1 = [5, 50, 80, 1, 2, 3, 5, 6, 8, 11, 15, 22, 27];

// const numerosFiltrados2 = numeros.filter(valor => {return valor > 10;});
const numerosFiltrados2 = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados)

//------------------------------------------------------------------------------//
console.log('--------------------------------------------');
//------------------------------------------------------------------------------//

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo o nome termina com a

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

// const pessoasComNomeGrande = pessoas.filter(function (obj) {
//     return obj.nome.length >= 7;
// })

// const idadeMaisCinquenta = pessoas.filter(function (obj) {
//     return obj.idade > 50;
// })

// const nomeTerminaComA = pessoas.filter(function(obj) {
//     return obj.nome.toLowerCase().endsWith('a');
// })

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 7);
const idadeMaisCinquenta = pessoas.filter(obj => obj.idade > 50);
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

console.log(pessoasComNomeGrande);  
console.log(idadeMaisCinquenta);
console.log(nomeTerminaComA);