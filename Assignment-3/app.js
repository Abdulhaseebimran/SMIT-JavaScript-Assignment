document.write("<h1> Assignment # 3 Array</h1>");

// ----------------- Q1 -----------------

var studentName = [];   // Array literal notation

// ----------------- Q2 -----------------

var studentName = new Array(); // JS object notation


// ----------------- Q3 -----------------

var stringArray = ["Abdul","Ammar", "Bilal", "Kashif", "Ali"];

// ----------------- Q4 -----------------

var numberArray = [1,2,3,4,5,6,7,8,9,10];

// ----------------- Q5 -----------------

var booleanArray = [true, false];

// ----------------- Q6 -----------------

var mixedArray = ["Abdul", 1, 44, true, "Ammar", 2, 25, false];

// ----------------- Q7 -----------------

var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h1> Qualification </h1> <br>");

for( var i = 0 ; i < qualification.length; i++){
    document.write(i+1 + ")" + qualification[i] + "<br>");
}

// ----------------- Q8 -----------------

var studentName = ["Abdul", "Ammar", "Bilal"];
var studentScore = [320, 230, 480];
var totalMarks = 500;

document.write("<h1> Student's Marks Sheet </h1> <br>");

for(var i =0; i<studentName.length; i++){
    document.write("Score of " + studentName[i] + " is " + studentScore[i] + ". percentage : " + (studentScore[i] / totalMarks)* 100 + "% <br>");
}

// ----------------- Q9 -----------------

var colors = ["Red", "Green", "Blue", "Yellow", "Orange", "Purple", "Pink", "Black", "White", "Brown"];

document.write("<h1> Colors </h1> <br>");

for(var i =0; i<colors.length; i++){
    document.write(colors[i] + "<br>");
}

var colorsToAdd = prompt("Enter color name you want to add in the beginning of array");
colors.unshift(colorsToAdd);
document.write("Updated colors is : " + colors + "<br>");

var colorsToAdd2 = prompt("Enter color name you want to add in the end of array");
colors.push(colorsToAdd2);
document.write("Updated colors is : " + colors + "<br>");

colors.unshift("Grey", "Sky Blue"); // Adding two colors in the beginning of array

colors.shift();  // deleting first color from array

colors.pop();    // deleting last color from array

var indexToAddColor = prompt("Enter index number where you want to add color");
var colorToAdd3 = prompt("Enter color name you want to add");

colors.splice(indexToAddColor, 0, colorToAdd3); // adding color at specific index

document.write("Updated colors is : " + colors + "<br>");

var indexToDeleteColor = prompt("Enter index number where you want to delete color");
var numberOfColorsToDelete = prompt("Enter number of colors you want to delete");

colors.splice(indexToDeleteColor, numberOfColorsToDelete); // deleting color at specific index

document.write("Updated colors is : " + colors + "<br>");

// ----------------- Q10 -----------------

var studentScore = [320, 230, 480, 120, 222, 333];

document.write("<h1> Student's Score </h1> <br>");

document.write("Scores of Students : " + studentScore + "<br>");
studentScore.sort(); // sorting array in ascending order

document.write("Ordered Scores of Students : " + studentScore + "<br>");

// ----------------- Q11 -----------------

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

document.write("<h1> Cities List </h1> <br>");

document.write("Cities List : " + cities + "<br>");

var selectedCities = cities.slice(2,5); // slicing array from index 2 to 5

document.write("Selected Cities List : " + selectedCities + "<br>");

// ----------------- Q12 -----------------

var singleArray = ["Hello", "World", "How", "are", "you"];

document.write("Joined Array : " + singleArray.join(" ") + "<br>");

// ----------------- Q13 -----------------

var fifoArray = [];

fifoArray.push("Keyboard");
fifoArray.push("Mouse");
fifoArray.push("Printer");

document.write("Devices : " + fifoArray + "<br>");

document.write("Out : " + fifoArray + "<br>");
fifoArray.shift();
document.write("Out : " + fifoArray + "<br>");
fifoArray.shift();
document.write("Out : " + fifoArray + "<br>");

// ----------------- Q14 -----------------

var lifoArray = [];

lifoArray.push("Keyboard");
lifoArray.push("Mouse");
lifoArray.push("Printer");

document.write("Devices : " + lifoArray + "<br>");

document.write("Out : " + lifoArray + "<br>");
lifoArray.pop();
document.write("Out : " + lifoArray + "<br>");
lifoArray.pop();
document.write("Out : " + lifoArray + "<br>");

// ----------------- Q15 -----------------

var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<h1> Phone Manufacturers </h1> <br>");

document.write("<select>" + "<option>" + phoneManufacturers.join("</option> <option>") + "</option>" + "</select>" + "<br>");



