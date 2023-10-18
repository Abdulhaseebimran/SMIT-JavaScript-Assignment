// maths expression

// 1- Write a program to take a number in a variable, do the required arithmetic to display the following result in your
// browser:

var a = 10;
document.write("The value of a is: " + a + "<br>");
++a;
document.write("The value of ++a is: " + a + "<br>");
a++;
document.write("The value of a++ is: " + a + "<br>");
--a;
document.write("The value of --a is: " + a + "<br>");
a--;
document.write("The value of a-- is: " + a + "<br>");

// 2- What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// explain each steps.

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;

// --a = 1 ,  --b = 0;
// --a - --b = 1;
// ++b = 1, b-- = 1;
// ++b + b-- = 2;
// --a - --b + ++b + b-- = 1 - 0 + 1 + 1 = 3;

console.log("Your result is: " + result); // the result is 3

// 3- Write a program that takes input a name from user & greet the user.

var userName = prompt("Enter your name: "); // prompt string leta hey or value ko return karta hey or value ko string main leta hey
alert("Alsalam o alaikum " + userName + " Welcome to my website");

// 5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5
// should be displayed by default.

var table = +prompt("Enter a number to show its multiplication table");
if (table == ' ') {
    table = 5;
}
for (var i = 1; i <= 10; i++) {
    document.write(table + " x " + i + " = " + table * i + "<br>");
}

// ---------- Q6 -----------

var sub1 = prompt("Enter first subject name");
var sub2 = prompt("Enter second subject name");
var sub3 = prompt("Enter third subject name");

var totalMarks = 100;

var obtainedMarks1 = prompt("Enter obtained marks for " + sub1 + ":");
var obtainedMarks2 = prompt("Enter obtained marks for " + sub2 + ":");
var obtainedMarks3 = prompt("Enter obtained marks for " + sub3 + ":");

document.write("<table border = '1'>");
document.write("<tr> <th> Subject </th> <th> Total Marks </th> <th> Obtained Marks </th> <th> Percentage </th> </tr>");
document.write("<tr> <td> " + sub1 + " </td> <td> " + totalMarks + " </td> <td> " + obtainedMarks1 + " </td> <td> " + (obtainedMarks1 / totalMarks) * 100 + "% </td> </tr>");
document.write("<tr> <td> " + sub2 + " </td> <td> " + totalMarks + " </td> <td> " + obtainedMarks2 + " </td> <td> " + (obtainedMarks2 / totalMarks) * 100 + "% </td> </tr>");
document.write("<tr> <td> " + sub3 + " </td> <td> " + totalMarks + " </td> <td> " + obtainedMarks3 + " </td> <td> " + (obtainedMarks3 / totalMarks) * 100 + "% </td> </tr>");
document.write("</table>")