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

var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}