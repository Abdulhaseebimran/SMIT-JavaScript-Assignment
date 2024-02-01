// Function , switch statement and while loops

// -------------------- Q1 -----------------------

function power(a,b){
    let result = 1;
    for(let i = 0; i < b; i++){
        result *= a;
    }
    return result;
}

// let a = +prompt("Enter a number");
// let b = +prompt("Enter power");
// alert("Power: " + power(a,b));

// -------------------- Q2 -----------------------

function leapYear(year){
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 40 === 0){
                return true;
            }else{
                return false;
            }
        }
        return true;
    }else{
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

function areaOfTriangle(a,b,c){
    let s = (a + b + c) / 2;
    let area = s * (s - a) * (s - b) * (s - c);
    return area;
}

// let a = +prompt("Enter side a");
// let b = +prompt("Enter side b");
// let c = +prompt("Enter side c");

// console.log("Area of triangle: " + Math.floor(areaOfTriangle(a,b,c)));

// -------------------- Q4 -----------------------

function studentMarks (num1, num2, num3){
    function average(){
        return (num1 + num2 + num3) / 3;
    }
    function percentage(){
        return (num1 + num2 + num3) / 300 * 100;
    }
    console.log("Average: " + average());
    console.log("Percentage: " + percentage());
}

// let num1 = +prompt("Enter marks of subject 1");
// let num2 = +prompt("Enter marks of subject 2");
// let num3 = +prompt("Enter marks of subject 3");
// studentMarks(num1, num2, num3);

// -------------------- Q5 -----------------------

function indexOf(string, char){
    for(let i = 0; i < string.length; i++){
        if(string[i] === char){
            return i;
        }
    }
}

// let string = prompt("Enter a string");
// let char = prompt("Enter a character");
// console.log(indexOf(string, char));

// -------------------- Q6 -----------------------