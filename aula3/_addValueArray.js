
const num = [7,8,9];

//adicionar itens ao final da lista 
num.push(10,11,12);

//adicionar itens ao começo da lista 
num.unshift(1,2,3);

//adicionar itens no meio da lista, passando o indice de inicio e se vai subistituir algum item da lista 
num.splice(3,0,4,5,6);

console.log(num);