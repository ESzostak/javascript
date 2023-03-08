// Dobrar os numeros utilizando map

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosEmDobro = numeros.map(function(valor){
//     return valor * 2;
// })

const numerosEmDobro = numeros.map(valor => valor * 2)

console.log(numerosEmDobro);

//------------------------------------------------------------------------------//
console.log('--------------------------------------------');
//------------------------------------------------------------------------------//

//Para cada elemento:
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

// const nomes = pessoas.map(function(valor){
//     return valor.nome;
// });

// const idades = pessoas.map(function(obj) {
//     // delete obj.nome; -> pode ser feito assim 
//     return {idade: obj.idade}; ou atribuir um nome objeto apenas com a idade
// });

const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

const idades = pessoas.map(obj => ({idade: obj.idade}));
console.log(idades);

const comIds = pessoas.map(function(obj, indice){
    // obj.id = (indice + 1) * 10; ---> isso irá alterar o objeto original
    const newObj = {...obj}; // Desta forma o objeto original não é alterado
    newObj.id = (indice + 1) * 10;
    return newObj; 
});

// console.log(pessoas);
console.log(comIds);