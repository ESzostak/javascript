
const movie = [
    {id: 1, movieName: 'Dejavu'},
    {id: 2, movieName: '007'},
    {id: 3, movieName: 'matrix'}
]

//para utilizar o find é preciso criar uma função
/*console.log(movie.find(function(movie) {
    return movie.movieName == '007';
}))*/

// sinal " => " faz a função do funciton e do return
console.log(movie.find(movie => movie.movieName == '007'));