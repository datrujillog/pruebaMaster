

function generateOddNumbersUpTo(maxNumber) {
    let oddNumbers = [];
    for (let i = 1; i <= maxNumber; i++) {
        if (i % 2 !== 0) {
            oddNumbers.push(i);
        }
    }
    return oddNumbers;
}

console.log(generateOddNumbersUpTo(9)); 
