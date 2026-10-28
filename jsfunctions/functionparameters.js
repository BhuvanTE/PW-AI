
function addAllNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
}

let sum=addAllNumbers(10, 20, 30);
console.log(`Sum of 10, 20 and 30 is: ${sum}`);

//rest parameters
function addAllNumbers1(...numbers) {
    let sum = 0;
    console.log(numbers);
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

let r=addAllNumbers1(10, 20, 30, 40, 50);
console.log(`Sum of the numbers is: ${r}`);