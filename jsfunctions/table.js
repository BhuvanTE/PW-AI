n=9;

for(let i=1;i<=10;i++){
    console.log(n+" * "+i+" = "+(n*i));
}

console.log("Using while loop");
let i = 1;
while(i<=10){
    console.log(n+" * "+i+" = "+(n*i));
    i++;
}


function printTable(num){
    for(let i=1;i<=10;i++){
        console.log(num+" * "+i+" = "+(num*i));
    }
}

console.log("Using function to print table");
printTable(5);