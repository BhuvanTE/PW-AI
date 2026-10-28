
function getFactorial(num) {
    let factorial = 1;
    for (let i = num; i>1; i--) {
        factorial *= i;
    }
    return factorial;
}
let n=getFactorial(6);
console.log(`Factorial of 6 is: ${n}`);