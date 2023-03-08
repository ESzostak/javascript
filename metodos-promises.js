function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') reject('BAD VALUE')
            resolve(msg + ' - Passei na promise');
        }, tempo);
    });
}

// Promise.all Promise.race Promise.resolve Promise.reject  
// Promise.race
const promise2 = [
    esperaAi('promisse1', rand(1 ,5)),
    esperaAi('promisse2', rand(1 ,5)),
    esperaAi('promisse3', rand(1 ,5)),
];

Promise.race(promise2)
    .then(function(valor) {
        console.log(valor);
    })
    .catch(function(erro) {
            console.log(erro);
    }); 

//promise.all
const promise = [
    'Primeiro valor',
    esperaAi('promisse1', rand(1 ,5)),
    esperaAi('promisse2', rand(1 ,5)),
    esperaAi('promisse3', rand(1 ,5)),
    'Outro valor'
];
    
Promise.all(promise)
    .then(function(valor) {
        console.log(valor);
    })
    .catch(function(erro) {
        console.log(erro);
    });