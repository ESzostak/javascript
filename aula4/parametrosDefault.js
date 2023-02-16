
function carLoan (loan, rate = 2.5, year = 5) {
    return (loan * rate / 100 * year) + loan;
}

console.log(carLoan(20000));