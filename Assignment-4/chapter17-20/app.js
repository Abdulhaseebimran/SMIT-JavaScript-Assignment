// Arrays and loops

// ------------------ Q1 ----------------------

const myArray = [[], []]; // multidimensional array

// ------------------ Q2 ----------------------

const multArray = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];

for (let i = 0; i < multArray.length; i++) {
  // document.write("<br/>" + multArray[i].join(" "));
  console.log(multArray[i].join(" "));
}

// ------------------ Q3 ----------------------

const counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < counting.length; i++) {
  console.log(counting[i] + "\n");
}

// ------------------ Q4 ----------------------

const tableNum = +prompt("Enter a number to show its multiplication table");

const tableLength = +prompt("Enter length multiplication table");

for (let i = 1; i <= tableLength; i++) {
  console.log(tableNum + " x " + i + " = " + tableNum * i);
}

// ------------------ Q5 ----------------------

const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i] + "\n");
}

for (let j = 0; j < fruits.length; j++) {
  console.log("Element at index " + j + " is " + fruits[j] + "\n");
}

// ------------------ Q6 ----------------------

let myCounting = [];
let myReverseCounting = [];
let myEven = [];
let myOdd = [];
let mySeries = [];

for (let i = 1; i <= 15; i++) {
  myCounting.push(i);
}
for (let i = 10; i >= 1; i--) {
  myReverseCounting.push(i);
}
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    myEven.push(i);
  } else {
    myOdd.push(i);
  }
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    mySeries.push(i + "k");
  }
}

console.log("Counting: " + myCounting);
console.log("Reverse Counting: " + myReverseCounting);
console.log("Even: " + myEven);
console.log("Odd: " + myOdd);
console.log("Series: " + mySeries);
