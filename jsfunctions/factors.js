//find the factors of a number
let number = 12;
console.log(`Factors of ${number} are:`);
function findFactors(num) {
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            console.log(i);
        }
    }

}

findFactors(number);
