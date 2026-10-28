// By default variable declaration is not required
// Its a standard programming practice
// let is used to declare block-scoped variables
// "use strict" enforce you to declare variables before using them




"use strict";
let x=10;
console.log(x);
let y=20;
console.log(x+y);

let z; //undefined variable
console.log(z);
let isActive=true;  //boolean variable
console.log(isActive);

let data=[1,2,3,4,5]; //object array
console.log(data);

//type of operator is used to find the data type of a variable
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
console.log(typeof isActive);
console.log(typeof data);


//json:javascript object notation
let employeeData={
    "name":"John",
    age:30,
    department:"IT",
    employeeTech:["JavaScript","React","Node.js"],
    salary:50000,
    emmployeeAddress:{
        street:"123 Main St",
        city:"New York",
        state:"NY",
        zip:"10001",
    }

}

let name="Bhuvan";
console.log(employeeData.name);
console.log(employeeData.age);
console.log(employeeData.department);
console.log(employeeData.employeeTech);


let employeeData1 = {
    employeeName: "John Doe", 
    employeeId: 67890,
    employeeTech: ["JavaScript", "Python", "Java"],
    employeeAddress: {
        street: "123 Main St",
        city: "Anytown",
        zipCode: "12345",
    }
};

let employeeName = 'Sekhar';
console.log(employeeName);
console.log(employeeData1.employeeName);