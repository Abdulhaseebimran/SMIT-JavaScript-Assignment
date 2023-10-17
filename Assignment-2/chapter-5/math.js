// ************  Maths Expressions  ************

// 1- Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var a = 3;
var b = 5;
var c = a + b;
document.write("Sum of " + a + " and " + b + " is " + c + "<br>");

// 2- Repeat task1 for subtraction, multiplication, division & modulus.

var c = a - b;
document.write("Subtraction of " + a + " and " + b + " is " + c + "<br>");

// multiplication

var c = a * b;
document.write("Multiplication of " + a + " and " + b + " is " + c + "<br>");

// division

var c = a / b;
document.write("Division of " + a + " and " + b + " is " + c + "<br>");

// modulus

var c = a % b;
document.write("Modulus of " + a + " and " + b + " is " + c + "<br>");

// 3- Do the following using JS Mathematic Expressions

// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// i Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.

var math;
document.write("Value after variable declaration is: " + math + "<br>");
math = 5;
document.write("Initial value: " + math + "<br>");
math++;
document.write("Value after increment is: " + math + "<br>");
math = math + 7;
document.write("Value after addition is: " + math + "<br>");
math--;
document.write("Value after decrement is: " + math + "<br>");
math = math % 3;
document.write("The remainder is: " + math + "<br>");

// 3- Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.

var ticket = 600;
var totalPrice = ticket * 5;
document.write(
  "Total cost to buy 5 tickets to a movie is " + totalPrice + "PKR<br>"
);

// 4- Write a script to display multiplication table of any number in your browser.

var table = +prompt("Enter a number to show its multiplication table");
var lenght = +prompt("Enter length multiplication table");

document.write("Multiplication table of " + table + "<br>");
document.write("Length " + lenght + "<br>");
for (var i = 1; i <= lenght; i++) {
  document.write(table + " x " + i + " = " + table * i + "<br>");
}

// 5- The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

var celsius = 45;
var fahrenheit = 104;

var fahrenheitToCelsius = ((fahrenheit - 32) * 5) / 9;
var celsiusToFahrenheit = (celsius * 9) / 5 + 32;

document.write(celsius + "°C is " + celsiusToFahrenheit + "°F<br>");
document.write(fahrenheit + "°F is " + fahrenheitToCelsius + "°C<br>");

// Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables.
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

var priceItem1 = 550;
var priceItem2 = 150;
var quantityItem1 = 3;
var quantityItem2 = 7;
var shippingCharges = 200;

document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + quantityItem2 + "<br>");

var totalCost = priceItem1 * quantityItem1 + priceItem2 * quantityItem2 + shippingCharges;

document.write("Total cost of your order is " + totalCost + "<br>");

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

var totalMarks = 850;
var obtainedMarks = 700;
var percentage = (obtainedMarks / totalMarks) * 100;

document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + "<br>");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

var usDollar = 10;
var saudiRiyal = 25;

var totalCurrency  = usDollar * 104.80 + saudiRiyal * 28;

document.write("Total Currency in PKR: " + totalCurrency + "<br>");

// 10- Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var num = 5;
document.write("Result: " + ((num + 5) * 10) / 2 + "<br>");

// 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.


var currentYear = 2023;
var birthYear = 2002;
var age = currentYear - birthYear;

document.write(" <h1> Age Calculator </h1> <br>");
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Your Age is: " + age + "<br>");

// 12. The Geometrizer: Calculate properties of a circle.
//  a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.

var radius  = 20;
var circumference = 2 * 3.142 * radius;

document.write("<h1> The Geometrizer </h1> <br>");
document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + 3.142 * radius * radius + "<br>");

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).

var favSnack = "chocolato";
var currentAge = 15;
var maxAge = 70;
var amountPerDay = 3;
var totalSnacks = (maxAge - currentAge) * amountPerDay;

document.write("<h1> The Lifetime Supply Calculator </h1> <br>");
document.write("Favourite Snack: " + favSnack + "<br>");
document.write("Current age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + amountPerDay + "<br>");