// Hoisting -> javaScript executa primeiro as funcões do código

movie();

function movie() {
    console.log('The Matrix');
}


//como a é uma função de expreção, a chamada da functio tem q ser depois do código
//desta forma nao funcionara
car()

const car = function(){
    console.log('tesla');
}
