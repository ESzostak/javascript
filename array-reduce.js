// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    return acumulador;
}, 0);

const numerosPares = numeros.reduce(function(acumulador, valor, indice, array){
    if(valor % 2 === 0) acumulador.push(valor)
    return acumulador
}, []);

const dobroValor = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador.push(valor * 2);
    return acumulador
}, []);

console.log(total);
console.log(numerosPares);
console.log(dobroValor);


//------------------------------------------------------------------------------//
console.log('--------------------------------------------');
//------------------------------------------------------------------------------//

//Retone a pessoa mais velha

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 100},
];

const maisVelho = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
}, 0);

console.log(maisVelho);