// Date Methods

// --------------------- Q1 ----------------------------

const date = new Date();

let currentDate = date.toString();
let currentTime = date.toTimeString();

console.log("Current Date: " + currentDate);
console.log("Current Time: " + currentTime);

// --------------------- Q2 ----------------------------

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let getCurrentMonths = date.getMonth();

let setCurrentMonths = months[getCurrentMonths];

console.log("Current Months at index: " + getCurrentMonths);
console.log("Current Month name is: " + setCurrentMonths.toUpperCase());

// --------------------- Q3 ----------------------------

let daysArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentDay = date.getDay();

let splitWords = daysArray[currentDay].slice(0, 3);

// alert("Current Day: " + splitWords);
console.log("Current Day: " + splitWords);

// console.log(date.getDay()); // they show index of the day means tuesday [2];

// --------------------- Q4 ----------------------------

let daysArray2 = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let getCurrentDays = date.getDay();
let daysSort = daysArray2[getCurrentDays];

if (daysSort === "Sunday" || daysSort === "Saturday") {
  console.log("Today it's fun day!");
  console.log("Because Today is: " + daysSort);
} else {
  console.log("Today it's working day!");
  console.log("Because Today is: " + daysSort);
}

// --------------------- Q5 ----------------------------

let currentDate2 = date.getDate();

if (currentDate2 < 16) {
  console.log("First fifteen days of the month's");
} else {
  console.log("Last day of the month's");
}

// --------------------- Q6 ----------------------------

let current_Date = date.toString();
let getMilliSeconds = date.getTime();
let getMinutes = date.getTime() - 1000 * 60 * 60 * 24 * 30 * 12;

console.log("Current Date: " + current_Date);
console.log("Elpased Milliseconds since january 1, 1970: " + getMilliSeconds);
console.log("Elpased Minutes since january 1, 1970: " + getMinutes);

// --------------------- Q7 ----------------------------

let current_Time = date.getHours();

let localTime = date.toLocaleTimeString();

if (current_Time < 12 && current_Time >= 0) {
  console.log("It's AM " + localTime);
} else {
  console.log("It's PM " + localTime);
}

// --------------------- Q8 ----------------------------

const later_date = new Date("31 December 2020");

console.log("Later Date: " + later_date);

// --------------------- Q9 ----------------------------

const ramadanDate = new Date("11 March 2024");
const pastRamadan = new Date("18 June 2015");

let difference = ramadanDate - pastRamadan;

let minutes = difference / (1000 * 60);
console.log("minutes passed " + minutes);

let days = difference / (1000 * 60 * 60 * 24);
console.log("days passed " + days);
console.log(`${days} Days have been passed since 1st Ramadan, 2015`);

// --------------------- Q10 ----------------------------

let refDate = new Date("05 December 2015");
let date3 = new Date();

let diff = date3 - refDate;
let secondsPast = diff / 1000;

console.log(
  Math.round(secondsPast) +
    " " +
    "seconds have been passed since December, 2015"
);

// --------------------- Q11 ----------------------------

let currentDate3 = new Date();
let date4 = new Date();

date4.setHours(date4.getHours() + 1);

console.log("Current Date: " + currentDate3);
console.log("1 hour ago, it was " + date4);

// --------------------- Q12 ----------------------------

let currentDate4 = new Date();

let date5 = new Date();

date5.setFullYear(date5.getFullYear() - 100);

console.log("Current Date: " + currentDate4);
console.log("100 years back, it was " + date5);

// --------------------- Q13 ----------------------------

let userAge = +prompt("Enter your age: ");

let currentDate5 = new Date();

let currentYear = currentDate5.getFullYear();
// console.log("Current Year: " + currentYear);

let birthYear = currentYear - userAge;

console.log("Your age is: " + userAge);

console.log("Your birth year is: " + birthYear);

// --------------------- Q14 ----------------------------

let customerName = prompt("Enter your name: ");
let currentMonth = prompt("Enter current month: ");
let numberOfUnits = +prompt("Enter number of units: ");
let chargesPerUnit = +prompt("Enter charges per unit: ");
let dueDate = new Date(prompt("Enter Due Date (YYYY-MM-DD):"));

let currentDate6 = new Date();

let netAmount = numberOfUnits * chargesPerUnit;
const latePayment = currentDate6 - dueDate;

let latePaymentCharges = 0;

if (latePayment) {
  latePaymentCharges = (netAmount / 100) * 10;
  netAmount = netAmount + latePaymentCharges;
}

let grossAmount = netAmount + latePaymentCharges;

document.write(`
    <h1>K-Electric Bill</h1> <br />
    Customer Name: <b>${customerName}</b> <br />
    Current Month: <b>${currentMonth}</b> <br />
    Number of Units: <b>${numberOfUnits}</b> <br />
    Charges per Unit: <b>${chargesPerUnit}</b> <br />
    Net Amount Payable (within Due Date): <b>${netAmount}</b> <br />
    Late Payment Surcharge: <b>${latePaymentCharges.toFixed(2)}</b> <br />
    Gross Amount Payable (after Due Date): <b>${grossAmount}</b> <br />
    <br/>`);
