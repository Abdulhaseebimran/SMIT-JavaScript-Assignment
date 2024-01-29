// String's Methods

// ----------------- Q1 --------------------

let firstName = prompt("Enter your first name");
let lastName = prompt("Enter your last name");

const fullName = firstName + " " + lastName;
console.log("Hello, " + fullName);

// ----------------- Q2 --------------------

let favouriteMobile = prompt("Enter your favourite mobile phone model");
let favouriteMobileLength =  favouriteMobile.length;

console.log("My favourite phone is: " + favouriteMobile + "\nLength of string is: " + favouriteMobileLength);


// ----------------- Q3 --------------------

let country = "Pakistani";
let findIndex = country.indexOf("n");

console.log("Country: " + country + "\nIndex of n: " + findIndex);

// ----------------- Q4 --------------------

let word = "Hello World";
let findLastIndex = word.lastIndexOf("l"); 

console.log("Word: " + word + "\nLast Index of L is: " + findLastIndex);

// ----------------- Q5 --------------------

let countryWord = "Pakistani";
let findIndexof3 = countryWord.charAt(3);  // charAt() method returns the character at the specified index in a string.

console.log("Country: " + countryWord + "\nCharacter at index 3: " + findIndexof3);

// ----------------- Q6 --------------------

let firstName2 = prompt("Enter your first name");
let lastName2 = prompt("Enter your last name");

let fullName2 = firstName2.concat(" " + lastName2); // concat() method is used to join two or more strings.

console.log("Hello, " + fullName2);

// ----------------- Q7 --------------------

let cityName = "Hyderabad";
let replaceCityName = cityName.replace("Hyder", "Islam");

console.log("City: " + cityName + "\nAfter replacement: " + replaceCityName);

// ----------------- Q8 --------------------


let message = "Ali and Sami are best friends. They play cricket and football together.";

let replaceMessage = message.replaceAll("and", "&");

console.log("Message: " + message + "\nReplace Message: " + replaceMessage);

// ----------------- Q9 --------------------

let originalString = "472";
console.log(originalString + " " + (typeof originalString));

let convertNumber = Number(originalString);
console.log(convertNumber + " " + (typeof convertNumber));

// ----------------- Q10 --------------------

let userInput = prompt("Enter any word to convert into uppercase");

let convertUpperCase = userInput.toUpperCase();

console.log("User Input: " + userInput + "\nUpper Case: " + convertUpperCase);


// ----------------- Q11 --------------------

let anyWord = prompt("Enter any word to convert into title case");

let titleCase = anyWord.charAt(0).toUpperCase() + anyWord.slice(1, anyWord.length);

console.log("User Input: " + anyWord + "\nTitle Case: " + titleCase);


// ----------------- Q12 --------------------

let num = 35.36;
let convertNum = num.toFixed(0);

console.log("Number: " + num + "\nResult: " + convertNum);

