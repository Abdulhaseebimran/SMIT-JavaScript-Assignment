// user input and conditional statements


// ---------- Q1 -----------

var cityName = prompt("Enter your city name: ");
if (cityName === 'karachi' || cityName === 'Karachi') {
    alert("welcome to city of lights");
} else {
    alert("Welcome to " + cityName);
}

// ---------- Q2 -----------

var gender = prompt("Enter you Gender: ");
if (gender === 'male' || gender === 'Male') {
    alert("Good Morning Sir");
} else if (gender === 'female' || gender === 'Female') {
    alert("Good Morning Ma'am");
} else {
    alert("Good Morning" + gender);
}

// ---------- Q3 -----------

var color = prompt("Enter color of road traffic signal: ");
if (color === 'red' || color === 'Red') {
    alert("Must Stop");
} else if (color === 'yellow' || color === 'Yellow') {
    alert("Ready to move");
} else if (color === 'green' || color === 'Green') {
    alert("Move now");
} else {
    alert("Please enter the correct color");
}

// ---------- Q4 -----------

var fuel = +prompt("Enter remaining fuel in car (in litres): ");
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
} else {
    alert("You have enough fuel");
}

// ---------- Q5 -----------

// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

// ---------------- Q6 ----------------

var sub1 = +prompt("Enter marks of subject 1: ");
var sub2 = +prompt("Enter marks of subject 2: ");
var sub3 = +prompt("Enter marks of subject 3: ");

var totalMarks = 300;

var obtainedMraks = sub1 + sub2 + sub3;
var percentage = (obtainedMraks / totalMarks) * 100;

if (percentage >= 80) {
    var grade = "A-one";
    var remarks = "Excellent";
} else if (percentage >= 70) {
    var grade = "A";
    var remarks = "Good";
} else if (percentage >= 60) {
    var grade = "B";
    var remarks = "You need to improve";
} else if (percentage < 60) {
    var grade = "Fail";
    var remarks = "Sorry";
} else {
    alert("please enter the correct marks and percentage");
}


document.write("<h1>MarkSheet</h1>");
document.write("<br>Total Marks: " + totalMarks);
document.write("<br>Marks Obtained: " + obtainedMraks);
document.write("<br>Percentage: " + percentage + "%");
document.write("<br>Grade: " + grade);
document.write("<br>Remarks: " + remarks);

// ---------------- Q7 ----------------

var secretNumber = 6;
var userNumber = +prompt("Guess the secret number: ");

if (userNumber === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userNumber === secretNumber + 1) {
    alert("Close enough to the correct answer");
} else {
    alert("Wrong answer");
}

// ---------------- Q8 ----------------

var userInput = +prompt("Enter a number: ");
if (userInput % 3 === 0) {
    alert("Number is divisible by 3");
} else {
    alert("Number is not divisible by 3");
}

// ---------------- Q9 ----------------

var userInput2 = +prompt("Enter a Number: ");
if (userInput2 % 2 === 0) {
    alert("The Number is Even");
} else {
    alert("The Number is odd");
}

// ---------------- Q10 ----------------

var temperature = +prompt("Enter Temperature with range(0 - 50): ");

if (temperature > 40) {
    alert("It is too hot outside");
} else if (temperature > 30) {
    alert("The Weather today is Normal");
} else if (temperature > 20) {
    alert("Today’s Weather is cool");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool");
} else {
    alert("Enter the correct temperature")
}

// ---------------- Q11 ----------------

var num1 = +prompt("Enter First Number: ");
var num2 = +prompt("Enter Second Number: ");
var operator = prompt("Enter Operator: +, -, *, /, %");

if (operator === '+') {
    alert("Addition: " + (num1 + num2));
} else if (operator === '-') {
    alert("Subtraction: " + (num1 - num2));
} else if (operator === '*') {
    alert("Multiplication: " + (num1 * num2));
} else if (operator === '/') {
    alert("Division: " + (num1 / num2));
} else if (operator === '%') {
    alert("Modulus: " + (num1 % num2));
} else {
    alert("Please enter the correct operator");
}