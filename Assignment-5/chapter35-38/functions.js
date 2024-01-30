// Functions in JavaScript

// -------------------- Q1 ---------------------- 

function currentDate () {
    let date = new Date();
    date = date.toString();
    console.log(date);
}

currentDate();

// -------------------- Q2 ----------------------

function printName (){
    let firstName = prompt("Enter your first name");
    let lastName = prompt("Enter your last name");
    let fullName = firstName + " " + lastName;
    alert("Hello, " + fullName);
}

// printName();

// -------------------- Q3 ----------------------

function addTwoNumbers (){
    let firstNumber = +prompt("Enter first number");
    let secondNumber = +prompt("Enter second number");
    let sum = firstNumber + secondNumber;
    alert("Sum of two numbers is: " + sum);
}

// addTwoNumbers(); // calling function

// -------------------- Q4 ----------------------

function calculator (num1, num2, num3){
    num1 = +prompt("Enter first number");
    num2 = +prompt("Enter second number");
    num3 = prompt("Enter operator");

    let result;
    if (num3 === "+"){
        result = num1 + num2;
    }else if (num3 === "-"){
        result = num1 - num2;
    }else if (num3 === "*"){
        result = num1 * num2;
    }else if (num3 === "/"){
        result = num1 / num2;
    }else if (num3 === "%"){
        result = num1 % num2;
    }else{
        result = "Invalid operator";
    }
    alert("Result: " + result);
}

// calculator();

// -------------------- Q5 ----------------------
