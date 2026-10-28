//switch executes matching case block based on the value of the expression. If no case matches, the default block is executed. The break statement is used to exit the switch block. If break is omitted, execution will continue to the next case.
let day = 7;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}


//ternary operator is a shorthand for if-else statement. It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false.
let age = 18;
let isAdult = (age >= 18) ? "Yes" : "No";
console.log("Is the person an adult? " + isAdult);