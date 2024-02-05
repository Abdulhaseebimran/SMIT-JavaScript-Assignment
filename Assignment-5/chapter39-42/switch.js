// Function , switch statement and while loops

// -------------------- Q1 -----------------------

function power(a, b) {
  let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a; // result = result * a;
  }
  return result;
}

// let a = +prompt("Enter a number");
// let b = +prompt("Enter power");
// alert("Power: " + power(a,b));

// -------------------- Q2 -----------------------

function leapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 40 === 0) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

// let year = +prompt("Enter a year");
// if(leapYear(year)){
//     console.log("it is a leap year: " + year);
// }else{
//     console.log("It is not a leap year: " + year);
// }

// -------------------- Q3 -----------------------

function areaOfTriangle(a, b, c) {
  let s = (a + b + c) / 2;
  let area = s * (s - a) * (s - b) * (s - c);
  return area;
}

// let a = +prompt("Enter side a");
// let b = +prompt("Enter side b");
// let c = +prompt("Enter side c");

// console.log("Area of triangle: " + Math.floor(areaOfTriangle(a,b,c)));

// -------------------- Q4 -----------------------

function studentMarks(num1, num2, num3) {
  function average() {
    return (num1 + num2 + num3) / 3;
  }
  function percentage() {
    return ((num1 + num2 + num3) / 300) * 100;
  }
  console.log("Average: " + average());
  console.log("Percentage: " + percentage());
}

// let num1 = +prompt("Enter marks of subject 1");
// let num2 = +prompt("Enter marks of subject 2");
// let num3 = +prompt("Enter marks of subject 3");
// studentMarks(num1, num2, num3);

// -------------------- Q5 -----------------------

function indexOf(string, char) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      return i;
    }
  }
}

// let string = prompt("Enter a string");
// let char = prompt("Enter a character");
// console.log(indexOf(string, char));

// -------------------- Q6 -----------------------

function deleteVowels(string) {
  let newString = "";
  let i = 0;
  while (i < string.length) {
    if (
      string[i] !== "a" &&
      string[i] !== "e" &&
      string[i] !== "i" &&
      string[i] !== "o" &&
      string[i] !== "u"
    ) {
      newString += string[i];
    }
    i++;
  }
  return newString;
}

// let sentences = prompt("Enter a string");
// console.log(deleteVowels(sentences));

// -------------------- Q7 -----------------------
// is ques ko sai karna hey?

function countVowels(string) {
  let count = 0;
  for (let i = 0; i < string.length - 1; i++) {
    switch (string[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        if (string[i] === string[i + 1]) {
          count++;
          console.log("Found a pair of vowels:", string[i], string[i + 1]);
        }
        break;
    }
  }
  return count;
}

// let sentences = prompt("Enter a string: ");
// console.log("Number of occurrences of any two vowels in succession: " + countVowels(sentences));

// -------------------- Q8 -----------------------

function distanceInMeter(km) {
  return km * 1000;
}

function distancsInFeet(km) {
  return km * 3280.84;
}

function distanceInInches(km) {
  return km * 39370.1;
}

function distanceInCentimeter(km) {
  return km * 100000;
}

// let km = +prompt("Enter distance in km");
// console.log("Distance in meter: " + distanceInMeter(km));
// console.log("Distance in feet: " + distancsInFeet(km));
// console.log("Distance in inches: " + distanceInInches(km));
// console.log("Distance in centimeter: " + distanceInCentimeter(km));

// -------------------- Q9 -----------------------

function overTimePay(hours) {
  if (hours >= 40) {
    return (hours - 40) * 12;
  } else {
    return "No overtime pay";
  }
}

// let hours = +prompt("Enter hours worked: ");
// console.log("Overtime pay: " + overTimePay(hours) + " RS");

// -------------------- Q10 -----------------------

function cashier(amount) {
  let hundred = Math.floor(amount / 100);
  let fifty = Math.floor((amount % 100) / 50);
  let ten = Math.floor(((amount % 100) % 50) / 10);
  console.log(
    `You will have ${hundred} hundreds notes ${fifty} fifity notes ${ten} and ten notes`
  );
}

// let amount = +prompt("Enter amount to withdraw: ");
// cashier(amount);
