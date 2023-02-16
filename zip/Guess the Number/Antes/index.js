 
 let computerNumber;
 let userNumbers = [];
 let attempts = 0;
 const maxGuesses = 10;

 function newGame () {
    window.location.reload();
 }

 function init () {
    computerNumber = Math.floor(Math.random() * 100 + 1);
    console.log(computerNumber);
    
 }

 function compareNumbers () {
    const userNumber = Number(document.getElementById('inputBox').value);
    userNumbers.push(' ' + userNumber);
    document.getElementById('guesses').innerHTML = userNumbers;

    if (attempts < maxGuesses) { 
        if (userNumber > computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Your number is tool high!';
            document.getElementById('inputBox').value = '';
            attempts++
            document.getElementById('attempts').innerHTML = attempts;
        } 
        else if (userNumber < computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Your number is tool low!';
            document.getElementById('inputBox').value = '';
            attempts++
            document.getElementById('attempts').innerHTML = attempts;
        } 
        else {
            document.getElementById('textOutput').innerHTML = 'congratulations!!';
            attempts++
            document.getElementById('attempts').innerHTML = attempts;
            document.getElementById('inputBox').setAttribute('ReadOnly', 'ReadOnly');
        }    
    }
    else{
        document.getElementById('textOutput').innerHTML = 'You lose! The number computer was ' + computerNumber;
        document.getElementById('inputBox').setAttribute('ReadOnly', 'ReadOnly');
    }
} 