// Functions in JavaScript

// -------------------- Q1 ----------------------

function currentDate() {
  let date = new Date();
  date = date.toString();
  console.log(date);
}

currentDate();

// -------------------- Q2 ----------------------

function printName() {
  let firstName = prompt("Enter your first name");
  let lastName = prompt("Enter your last name");
  let fullName = firstName + " " + lastName;
  alert("Hello, " + fullName);
}

// printName();

// -------------------- Q3 ----------------------

function addTwoNumbers() {
  let firstNumber = +prompt("Enter first number");
  let secondNumber = +prompt("Enter second number");
  let sum = firstNumber + secondNumber;
  alert("Sum of two numbers is: " + sum);
}

// addTwoNumbers(); // calling function

// -------------------- Q4 ----------------------

function calculator(num1, num2, num3) {
  num1 = +prompt("Enter first number");
  num2 = +prompt("Enter second number");
  num3 = prompt("Enter operator");

  let result;
  if (num3 === "+") {
    result = num1 + num2;
  } else if (num3 === "-") {
    result = num1 - num2;
  } else if (num3 === "*") {
    result = num1 * num2;
  } else if (num3 === "/") {
    result = num1 / num2;
  } else if (num3 === "%") {
    result = num1 % num2;
  } else {
    result = "Invalid operator";
  }
  alert("Result: " + result);
}

// calculator();

// -------------------- Q5 ----------------------

function square(sq) {
  sq = +prompt("Enter a number to find its square");
  let res = sq * sq;
  return res;
}

// let squareValue = square();
// alert("Square of given number is: " + squareValue);

// -------------------- Q6 ----------------------

function factorial(num) {
  num = +prompt("Enter a number to find it's factorial");
  let res = 1;
  for (let i = num; i >= 1; i--) {
    res = res * i;
  }
  return res;
}

// let factorialValue = factorial();
// alert("Factorial of given number is: " + factorialValue);

// -------------------- Q7 ----------------------

function counting(start, end) {
  start = +prompt("Enter starting number");
  end = +prompt("Enter ending number");
  for (let i = start; i <= end; i++) {
    document.write(i + "<br/>");
  }
  return;
}

// counting();

// -------------------- Q8 ----------------------

function calculateHypotenuse(base, perp) {
  function calculateSquare(num) {
    return num * num;
  }
  base = +prompt("Enter base of right angle triangle");
  perp = +prompt("Enter prependicular of right angle triangle");
  let hyp = calculateSquare(base) + calculateSquare(perp);
  return hyp;
}

// let hypotenuse = calculateHypotenuse();
// alert("Hypotenuse of right angle triangle is: " + hypotenuse);

// -------------------- Q9 ----------------------

function areaOfRectangle(width, height) {
  return width * height;
}

// let rectangleHeight = +prompt("Enter height of rectangle");
// let rectangleWidth = +prompt("Enter width of rectangle");

// let area = areaOfRectangle(rectangleHeight, rectangleWidth);
// alert("Area of rectangle is: " + area);

// -------------------- Q10 ----------------------

function palindrome(str) {
  if (str === str.split("").reverse().join("")) {
    alert("Given string is palindrome: " + str);
  } else {
    alert("Given string is not palindrome: " + str);
  }
}

// let strValue = prompt("Enter a string to check if it is palindrome or not");
// palindrome(strValue);

// -------------------- Q11 ----------------------

function firstLetterUpperCase(str) {
  let arr = str.split(" ");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  return newArr.join(" ");
}

// let strValue = prompt("Enter a string to convert it into title case");
// let titleCase = firstLetterUpperCase(strValue);
// alert("Title case: " + titleCase);

// -------------------- Q12 ----------------------

function longestWord(str) {
  let arr = str.split(" ");
  let longesWord = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longesWord.length) {
      longesWord = arr[i];
    }
  }
  return longesWord;
}


// let strValue = prompt("Enter a string to find longest word");
// let longestWordValue = longestWord(strValue);
// alert("Longest word is: " + longestWordValue);

// -------------------- Q13 ----------------------

function countLetter(str, letter){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === letter){
            count++;
        }
    }

    return count;
}

// let stringValue = prompt("Enter a string");
// let letterValue = prompt("Enter a letter to count it in string");
// let count = countLetter(stringValue, letterValue);
// alert("Letter " + letterValue + " occured " + count + " times in string");

// -------------------- Q14 ----------------------

function calcCircumference(radius){
    return 2 * 3.142 * radius;
}

let radiusValue = +prompt("Enter radius of circle");
let circumference = calcCircumference(radiusValue);
alert("Circumference of circle is: " + circumference);

function calcArea(radius){
    return 3.142 * radius * radius;
}

let area = calcArea(radiusValue);   
alert("Area of circle is: " + area);