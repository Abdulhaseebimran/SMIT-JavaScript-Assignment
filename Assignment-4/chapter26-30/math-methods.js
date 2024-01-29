// Math Methods

// ----------------- Q1 --------------------

let positiveInteger = +prompt("Enter a positive integer number");

let roundOff = Math.round(positiveInteger);
let floorOff = Math.floor(positiveInteger);
let ceilOff = Math.ceil(positiveInteger);

console.log("Number: " + positiveInteger);
console.log("Round off value: " + roundOff);
console.log("Floor value: " + floorOff);
console.log("ceil value: " + ceilOff);

// ----------------- Q2 --------------------

let negativeInteger = +prompt("Enter a negative floating point number");

let roundOff2 = Math.round(negativeInteger);
let floorOff2 = Math.floor(negativeInteger);
let ceilOff2 = Math.ceil(negativeInteger);

console.log("Number: " + negativeInteger);
console.log("Round off value: " + roundOff2);
console.log("Floor value: " + floorOff2);
console.log("ceil value: " + ceilOff2);

// ----------------- Q3 --------------------

let absoluteValue = +prompt("Enter a number to get its absolute value");

let convertToAbsolute = Math.abs(absoluteValue); // negative value will be converted to positive

console.log("The absolute value of " + absoluteValue + " is " + convertToAbsolute);

// ----------------- Q4 --------------------

let diceValue = Math.floor(Math.random() * 6 + 1);

console.log("Random dice value: " + diceValue);


// ----------------- Q5 --------------------

let coinsValue = Math.floor(Math.random() * 2 + 1);

if (coinsValue === 1) {
    console.log(coinsValue);
    console.log("Random coin value: Tails");
}else if(coinsValue === 2){
    console.log(coinsValue);
    console.log("Random coin value: Heads");
}else{
    console.log("Error the number is not 1 or 2");
}

// ----------------- Q6 --------------------

let randomNumber = Math.floor(Math.random() * 100 + 1);

console.log("Random value in range 1 to 100: " + randomNumber);

// ----------------- Q7 --------------------

let userWeight = prompt("Enter your weight in kilograms");

let convertToNumber = parseFloat(userWeight);

if(!isNaN(convertToNumber)){
    console.log("The weight of user is " + convertToNumber + " kilograms");
}else{
    console.log("Error: Please enter a number");
}


// ----------------- Q8 --------------------

let secretNumber = Math.floor(Math.random() * 10 + 1);

let userNumber = +prompt("Enter a number between 1 to 10");

if(userNumber === secretNumber){
    console.log("Congratulation you won");
    console.log("Secret number is " + secretNumber + " and your number is " + userNumber);  
}else{
    console.log("Try again");
    console.log("Secret number is " + secretNumber + " and your number is " + userNumber);
}