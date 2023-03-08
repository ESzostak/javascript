//reatribuindo os valores:
console.log('reatribuindo os valores:')

let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

console.log(a, b, c);

const letras =  ['B', 'C', 'A'];
[a, b, c] = letras;

console.log(a, b, c);

//---------------------------------------//
console.log('--------------------------------------------');
//---------------------------------------//

//atribuindo números as variáveis e imprimindo o resto:
console.log('atribuindo números as variáveis e imprimindo o resto:');

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const [dez, vinte, trinta, ...resto] = numeros;

console.log(dez, vinte, trinta);
console.log('O resto dos valores são: ' + resto);

//---------------------------------------//
console.log('--------------------------------------------');
//---------------------------------------//

//atribuindo a numeros alternados:
console.log('atribuindo a numeros alternados:')

const numeros1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const [dez1, , trinta1, , cinquenta] = numeros;

console.log(dez1, trinta1, cinquenta);

//---------------------------------------//
console.log('--------------------------------------------');
//---------------------------------------//

//imprimindo o valor de um array dentro de ouyro array:
console.log('imprimindo o valor de um array dentro de ouyro array:')

//    indices         0          1          2
//    indices      0  1  2    0  1  2    0  1  2
const numeros2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(numeros2[1][2]);

//---------------------------------------//
console.log('--------------------------------------------');
//---------------------------------------//

//imprimindo o valor de um array dentro de ouyro array, agora com outra complexidade:
console.log('imprimindo o valor de um array dentro de ouyro array, agora com outra complexidade:')

//    indices         0          1          2
//    indices      0  1  2    0  1  2    0  1  2
const numeros3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [,[,,seis]] = numeros3;

console.log(seis);

//---------------------------------------//
console.log('--------------------------------------------');
//---------------------------------------//

//Continuando a atribuição via desestruturação:
console.log('Continuando a atribuição via desestruturação:')

//    indices         0          1          2
//    indices      0  1  2    0  1  2    0  1  2
const numeros4 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3] = numeros4;

console.log(lista2[2]);




