
//index for loop
let x=[1,2,3,4,5];
for(let i=0;i<x.length;i++){
    console.log(x[i]);
}

//for of loop
let y=[10,20,30,40,50];
for(let value of y){   
    console.log(value);
}

//for in loop
let z={
    name:"John",
    age:30,
    city:"New York"
}; 
for(let key in z){
    console.log(key + ": " + z[key]);
}

//forEach loop
let a=[100,200,300,400,500];    
a.forEach((value) => {
    console.log(value);
});