
let productValue = Number(prompt('Enter de Product Value: '));

if (productValue >= 20) {
    document.getElementById('result').innerHTML = 'Approved';
}
else{
    document.getElementById('result').innerHTML = 'Denied';
}